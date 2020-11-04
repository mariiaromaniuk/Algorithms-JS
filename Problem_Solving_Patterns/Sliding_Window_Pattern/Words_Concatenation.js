// Given a string and a list of words, find all the starting indices of substrings in the 
// given string that are a concatenation of all the given words exactly once without any 
// overlapping of words. It is given that all words are of the same length.
// Input: String="catfoxcat", Words=["cat", "fox"]
// Output: [0, 3]  ->  The two substring containing both the words are "catfox" & "foxcat".

function find_word_concatenation(str, words) {
  if (words.length === 0 || words[0].length === 0) {
    return [];
  }

  wordFrequency = {};

  words.forEach((word) => {
    if (!(word in wordFrequency)) {
      wordFrequency[word] = 0;
    }
    wordFrequency[word] += 1;
  });

  const resultIndices = [],
    wordsCount = words.length;
  wordLength = words[0].length;

  for (i = 0; i < (str.length - wordsCount * wordLength) + 1; i++) {
    const wordsSeen = {};
    for (j = 0; j < wordsCount; j++) {
      next_word_index = i + j * wordLength;
      // Get the next word from the string
      word = str.substring(next_word_index, next_word_index + wordLength);
      if (!(word in wordFrequency)) { // Break if we don't need this word
        break;
      }

      // Add the word to the 'wordsSeen' map
      if (!(word in wordsSeen)) {
        wordsSeen[word] = 0;
      }
      wordsSeen[word] += 1;

      // no need to process further if the word has higher frequency than required
      if (wordsSeen[word] > (wordFrequency[word] || 0)) {
        break;
      }

      if (j + 1 === wordsCount) { // Store index if we have found all the words
        resultIndices.push(i);
      }
    }
  }

  return resultIndices;
}

// Test
console.log(find_word_concatenation('catfoxcat', ['cat', 'fox']));
console.log(find_word_concatenation('catcatfoxfox', ['cat', 'fox']));

/*
 Time: O(n * m * len) 
   ‘n’ is the number of characters in the given string, 
   ‘m’ is the total number of words, 
   ‘len’ is the length of a word.
 Space: O(m) 
   at most, we will be storing all the words in the two HashMaps. 
   the worst case, we also need O(n) space for the resulting list. 
   So, the overall space complexity of the algorithm will be O(n + m).
/*
