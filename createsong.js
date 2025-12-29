const submit = document.querySelector("#notes-submit");
const output = document.querySelector("#output");
const success = document.querySelector("#success");
const failure = document.querySelector("#failure");

const possiblenotes = [
    "C",
    "D",
    "E",
    "F",
    "G",
    "A",
    "B",
    "C#",
    "D#",
    "E#",
    "F#",
    "G#",
    "A#",
    "B#",
]

submit.addEventListener('click', () => {
    const notes_ = document.querySelector("#notes");
    const val = notes_.value;
    const notes = val.split(/[, ]/);
    let codes = "";
    for (let i in notes) {
        if (!(possiblenotes.includes(notes[i]))) {
            success.style.display = "none";
            failure.style.display = "block";
            failure.innerHTML = `Note ${notes[i]} is NOT a valid note!`;
            return;
        } else {
            codes += `piano_imp(id,${notes[i]});`
        }
    }
    success.style.display = "block";
    failure.style.display = "none";
    success.innerHTML = `Successfully converted piano notes to code!`;
    output.innerHTML = codes;
});
