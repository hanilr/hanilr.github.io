function setIco(favImg)
{
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel','shortcut icon');
    setFavicon.setAttribute('href',favImg);
    headTitle.appendChild(setFavicon);
}

function changeWhenGone(title_name, icon_path)
{
    window.onblur = function () 
    { 
        document.title = 'Waiting!'; 
        setIco("img/onblur.ico");
    }

    window.onfocus = function () 
    {
        document.title = 'Continue!';
        setIco("img/onfocus.ico");
        setTimeout(function () 
        {
            document.title = title_name;
            setIco(icon_path);
        }, 750);
    }
}

function locateUrl(url_path)
{
    window.location = url_path;
}

function ifMobile()
{
    if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i))
    {
        window.location = "mobile.html";
    }
}
