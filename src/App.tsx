import { useState } from 'react'
import * as bip39 from 'bip39'

function App() {
  const [wordCount, setWordCount] = useState<number>(12)
  const [words, setWords] = useState<string[]>([])

  const validWordCounts = [12, 15, 18, 21, 24]

  const generateWords = () => {
    // BIP39 word counts correspond to entropy bits: 12=128, 15=160, 18=192, 21=224, 24=256
    const entropyBits = ((wordCount / 3) * 32)
    const entropyBytes = entropyBits / 8

    // Generate random entropy
    const entropy = new Uint8Array(entropyBytes)
    crypto.getRandomValues(entropy)

    // Convert to hex string
    const entropyHex = Array.from(entropy)
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')

    // Generate mnemonic from entropy
    const mnemonic = bip39.entropyToMnemonic(entropyHex)
    const wordArray = mnemonic.split(' ')
    setWords(wordArray)
  }

  const getDotFormat = () => {
    if (words.length === 0) return ''
    return words.slice(0, 2).join('.')
  }

  const getDashFormat = () => {
    if (words.length === 0) return ''
    return words.slice(0, 3).join('-')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            BIP39 Word Generator
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Generate secure mnemonic phrases for cryptocurrency wallets
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
                        Username Format
                      </label>
                      <div className="flex items-center space-x-2">
                        <code className="flex-1 bg-white px-3 py-2 rounded border border-gray-300 text-sm font-mono">
                          {getDotFormat()}
                        </code>
                        <button
                          onClick={() => navigator.clipboard.writeText(getDotFormat())}
                          className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm transition-colors"
                          title="Copy to clipboard"
                        >
                          Copy
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        Password Format
                      </label>
                      <div className="flex items-center space-x-2">
                        <code className="flex-1 bg-white px-3 py-2 rounded border border-gray-300 text-sm font-mono">
                          {getDashFormat()}
                        </code>
                        <button
                          onClick={() => navigator.clipboard.writeText(getDashFormat())}
                          className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm transition-colors"
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

            {/* Warning Message */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Security Warning:</strong> Store these words securely offline. Never share them with anyone. Anyone with access to these words can access your wallet.
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
