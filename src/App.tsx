import { useState } from 'react'
import * as bip39 from 'bip39'

function App() {
  const [wordCount, setWordCount] = useState<number>(12)
  const [words, setWords] = useState<string[]>([])

  // Generate array of word counts from 2 to 24
  const validWordCounts = Array.from({ length: 23 }, (_, i) => i + 2)

  const generateWords = () => {
    // Get the BIP39 wordlist
    const wordlist = bip39.wordlists.english

    // Generate random words from the wordlist
    const randomWords: string[] = []
    for (let i = 0; i < wordCount; i++) {
      const randomIndex = crypto.getRandomValues(new Uint32Array(1))[0] % wordlist.length
      randomWords.push(wordlist[randomIndex])
    }

    setWords(randomWords)
  }

  const getDotFormat = () => {
    if (words.length === 0) return ''
    return words.join('.')
  }

  const getDashFormat = () => {
    if (words.length === 0) return ''
    return words.join('-')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            BIP39 Word Generator
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Generate random words from the BIP39 wordlist for usernames, passwords, and more
          </p>

          <div className="space-y-6">
            {/* Word Count Selection */}
            <div>
              <label htmlFor="wordCount" className="block text-sm font-medium text-gray-700 mb-2">
                Number of Words
              </label>
              <select
                id="wordCount"
                value={wordCount}
                onChange={(e) => setWordCount(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              >
                {validWordCounts.map((count) => (
                  <option key={count} value={count}>
                    {count} words
                  </option>
                ))}
              </select>
            </div>

            {/* Generate Button */}
            <button
              onClick={generateWords}
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors font-medium"
            >
              Generate Words
            </button>

            {/* Formatted Outputs */}
            {words.length > 0 && (
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-md p-4 border border-gray-200">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        Username Format (dot-separated)
                      </label>
                      <div className="flex items-center space-x-2">
                        <code className="flex-1 bg-white px-3 py-2 rounded border border-gray-300 text-sm font-mono break-all">
                          {getDotFormat()}
                        </code>
                        <button
                          onClick={() => navigator.clipboard.writeText(getDotFormat())}
                          className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm transition-colors whitespace-nowrap"
                          title="Copy to clipboard"
                        >
                          Copy
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        Password Format (dash-separated)
                      </label>
                      <div className="flex items-center space-x-2">
                        <code className="flex-1 bg-white px-3 py-2 rounded border border-gray-300 text-sm font-mono break-all">
                          {getDashFormat()}
                        </code>
                        <button
                          onClick={() => navigator.clipboard.writeText(getDashFormat())}
                          className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm transition-colors whitespace-nowrap"
                          title="Copy to clipboard"
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Full Word List */}
                <div>
                  <label htmlFor="wordList" className="block text-sm font-medium text-gray-700 mb-2">
                    Generated Words
                  </label>
                  <textarea
                    id="wordList"
                    value={words.join(' ')}
                    readOnly
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 font-mono text-sm"
                  />
                  <button
                    onClick={() => navigator.clipboard.writeText(words.join(' '))}
                    className="mt-2 w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-md transition-colors text-sm font-medium"
                  >
                    Copy All Words
                  </button>
                </div>
              </div>
            )}

            {/* Info Message */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Note:</strong> These words are randomly selected from the BIP39 wordlist. Store them securely if you plan to use them for passwords or sensitive accounts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
