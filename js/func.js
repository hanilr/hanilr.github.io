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

    window.onload = function ()
    {
        document.title = title_name;
        setIco(icon_path);
    }
}

function locateUrl(url_path)
{
    window.location = url_path;
}

function ifIos()
{
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)
    {
        window.location = "ios_index.html";
    }
}
