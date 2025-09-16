import fs from 'fs'
import { fileURLToPath } from 'url'
import { toString } from 'mdast-util-to-string'

export default function remarkModifiedTime() {
	return async (tree, vfile) => {
		try {
			// Use tree slightly to avoid unused-parameter warnings from TS
			// (we don't need the string itself; this keeps lint/TS clean)
			// Touch the tree by converting to string to avoid unused param warnings
			// We don't need the result, so don't assign it.
			toString(tree)

			// Try common locations for source path
			let sourcePath = vfile.path || (vfile.history && vfile.history[0])
			if (
				!sourcePath &&
				vfile.url &&
				typeof vfile.url === 'string' &&
				vfile.url.startsWith('file://')
			) {
				try {
					sourcePath = fileURLToPath(vfile.url)
				} catch {
					// ignore
				}
			}

			if (!sourcePath) {
				return
			}

			// Ensure string
			if (Array.isArray(sourcePath)) {
				sourcePath = sourcePath[0]
			}
			if (typeof sourcePath !== 'string') {
				return
			}

			// Some tools provide virtual paths; if it's a file:// URI, convert
			if (sourcePath.startsWith('file://')) {
				try {
					sourcePath = fileURLToPath(sourcePath)
				} catch {
					// ignore and bail
					return
				}
			}

			let stats
			try {
				stats = await fs.promises.stat(sourcePath)
			} catch {
				// If file not found, bail silently
				return
			}

			if (!stats || !stats.mtime) {
				return
			}

			const iso = new Date(stats.mtime).toISOString()

			// Attach to vfile.data only; avoid mutating frontmatter to prevent zod/astro issues
			if (!vfile.data || typeof vfile.data !== 'object') {
				vfile.data = { modifiedTime: iso }
			} else {
				vfile.data.modifiedTime = iso
			}
		} catch {
			// swallow errors to not break pipeline
			return
		}
	}
}
