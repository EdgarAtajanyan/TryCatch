function isPossible(a) {
    if(typeof a === "number") {
        try{
            if(a === 0) throw new Error("Zero Error")
            else if(a < 0) throw new Error("Negative Error")
            else return "Yes"
        }
        catch(err) {
            return err.message
        }
    }
}
