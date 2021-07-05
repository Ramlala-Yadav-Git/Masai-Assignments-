function container() {

    return `
     <div class="container">
        <h1>Add notes here...</h1>
        <input type="text" name="input" id="input" placeholder="Write here to add in notes..">
        <select id="select">
          <option value="day" >Select</option>
            <option value="day1" >day1</option>
            <option value="day2" >day2</option>
            <option value="day3" >day3</option>
            <option value="day3" >day4</option>
            <option value="day3" >day5</option>
        </select>
        <button id="btn" onclick="add()">Add</button>
    </div>
    `
}
function show() {

    return `
    <div class="show">
        <h1>Choose day for content..</h1>
        <select id="show" oninput="show()">
            <option value="day" >Select</option>
            <option value="day1" >day1</option>
            <option value="day2" >day2</option>
            <option value="day3" >day3</option>
            <option value="day4" >day4</option>
            <option value="day5" >day5</option>

        </select>
    </div>
    `
}

export { container, show };