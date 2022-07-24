function matchWords(wordsArr, queryArr) {
  const results = {};
  queryArr.forEach((query) => {
    let count = 0;
    wordsArr.forEach((word) => {
      let regExQuery = new RegExp(query.replace(/\?/g, '[\\w]*', '/g'));
      // console.log(regExQuery, word, results[query], regExQuery.test(word));
      if (regExQuery.test(word)) {
        count += 1;
      }
      // let finalQuery = query.replace(/\?/g, "");
      // console.log(finalQuery)
      // if(word.includes(finalQuery)){
      //   results[query] += 1;
      // }
    });
    console.log(count);
  });
}

const wordsArr = ['cat', 'hat', 'man', 'pen', 'sit'];
const queryArr = ['?at', '??n', '??t'];
matchWords(wordsArr, queryArr);
