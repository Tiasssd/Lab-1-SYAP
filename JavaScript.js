function btn1()
{
    alert("ДР: 8 июня.")
}

function change_image()
{
    img = document.getElementById('image')
    srcimg = img.getAttribute('src')
    if (srcimg === "img/image.jpg") {
        img.setAttribute("src", "img/image1.jpg")
    }
    else
    {
        img.setAttribute("src", "img/image.jpg")
    }
}

function click_on_like()
{
    let like = document.getElementById('like')
    let color = like.getAttribute("style")
    console.log(color)
    if (color === "color:gray") {
        like.setAttribute("style", "color:red")
        document.getElementById('count').textContent = String(Number(document.getElementById('count').textContent) + 1)
    }
    else
    {
        like.setAttribute("style", "color:gray")
        document.getElementById('count').textContent = String(Number(document.getElementById('count').textContent) - 1)
    }
}
