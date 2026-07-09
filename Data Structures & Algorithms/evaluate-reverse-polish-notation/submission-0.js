class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        for (let i = 0; i < tokens.length; i++) {
            let token = tokens[i];

            if (token === "+" || token === "-" || token === "*" || token === "/") {
                let b = stack.pop();
                let a = stack.pop();

                let res;

                if (token === "+") res = a + b;
                else if (token === "-") res = a - b;
                else if (token === "*") res = a * b;
                else res = Math.trunc(a / b);

                stack.push(res);
            } else {
                stack.push(Number(token));
            }
        }

        return stack.pop();
    }
}