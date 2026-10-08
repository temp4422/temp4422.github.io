import fs from 'node:fs'

const file = process.argv[2]

if (!file) {
  console.error('Usage: node removeHyphen.js <file>')
  process.exit(1)
}

if (!fs.existsSync(file)) {
  console.error(`File not found: ${file}`)
  process.exit(1)
}

const input = fs.readFileSync(file, 'utf8')

const output = input
  .split('\n')
  .map((line) => {
    /*
     * Match a RemNote bullet:
     *
     * - Text
     *     - Text
     *         - Text
     *
     * Also handles escaped bullets:
     *
     * \- Text
     */
    const match = line.match(/^(\s*)\\?-\s+(.*)$/)

    if (!match) {
      return line
    }

    const indentation = match[1]
    let content = match[2]

    /*
     * Determine hierarchy from indentation.
     * RemNote uses 4 spaces per level.
     */
    const level = Math.floor(indentation.length / 4)

    /*
     * Remove bold formatting around existing headings:
     *
     * **## History**
     * **### Short-term**
     *
     * -> ## History
     * -> ### Short-term
     */
    const existingHeading = content.match(/^\*\*(#{1,6})\s+(.+?)\*\*$/)

    if (existingHeading) {
      return `${existingHeading[1]} ${existingHeading[2]}`
    }

    /*
     * If the content already contains a Markdown heading,
     * preserve it instead of generating another one.
     *
     * Example:
     *
     *     ## History
     *
     * remains:
     *
     * ## History
     */
    if (/^#{1,6}\s+/.test(content)) {
      return content
    }

    /*
     * Normal RemNote bullet:
     *
     * - Coffee
     *
     * becomes plain text.
     *
     * Only the existing hierarchy is represented by headings
     * when the item itself is a structural heading.
     */
    return content
  })
  .join('\n')

/*
 * Remove excessive blank lines created by the conversion.
 */
const cleanedOutput = output.replace(/\n{3,}/g, '\n\n').trim() + '\n'

fs.writeFileSync(file, cleanedOutput, 'utf8')

console.log(`Converted: ${file}`)
