function reverseString(s) {
    try {
      if(typeof s !== "string") throw new Error("s.split is not a function")
          else return s = s.split("").reverse().join("")
      }
  catch (err) {
        return err.message
    }
  }