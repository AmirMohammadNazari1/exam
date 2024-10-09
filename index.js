let fetchexam = async () => {
    let exam = ""
    let examRes = await fetch("http://localhost:3000/exam")
    let dataexam = await examRes.json()
    dataexam.forEach((element) => {
        exam += `
             <div class="d-flex flex-column " style="width: 50px;">
                <img src="${element.image}" alt=""/>
                <span class="">${element.title}</span>
            </div>
    `
    })
    document.querySelector("div#exam").innerHTML = exam


}
fetchexam()