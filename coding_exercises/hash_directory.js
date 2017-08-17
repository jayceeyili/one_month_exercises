/***************************************************************************************************
  Suppose a hash representing a directory.
  All keys are strings with names for either folders or files.
  Keys that are folders point to nested hashes. Keys that are files point to "true".
  Write a function that takes such a hash and returns an array of strings with the path to each file in the hash.
  Examole:
  files = {
    'a' => {
      'b' => {
        'c' => {
          'd' => {
            'e' => true
          },

          'f' => true
        }
      }
    }
  }

  file_list(files) # => ['a/b/c/d/e', 'a/b/c/f']
***************************************************************************************************/

const hash_directory = hash => {
  let result = [];

  for (let path in hash) {
    if (hash[path] === true) {
      result.push(path);
    } else {
      hash_directory(hash[path]).forEach(file => result.push(path + '/' + file));
      // we defined the return value is an array, so we know 'hash_directory(hash([path]))' will be
      // an array.

      //  let nested_files = hash_directory(hash[path]);
      //  for (let i = 0; i < nested_files.length; i++) {
      //    result.push(path + '/' + nested_files[i]);
      //  }
    }
  }

  return result;
};


files = {
  'a' : {
    'b' : {
      'c' : {
        'd' : {
          'e' : true
        },

        'f' : true
      }
    }
  }
}

console.log(hash_directory(files)); // => ['a/b/c/d/e', 'a/b/c/f']
