let arr = ["Kunal Chandra", "Sumeet Malik", "Jasleen Kaur", "Ayush Chandra", "Shashank Aryan"];

let ans = arr.map(function (val, ind, arr) {
    return initials(val);
});

console.log(ans);

function initials(str) {

    let t = "",
        ans = "";

    str = str + " ";

    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);
        if (ch != ' ')
            t += ch;

        else {
            ans += t.charAt(0) + ".";
            t = "";
        }
    }
    return ans;
}
