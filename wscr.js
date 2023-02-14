async function createlib(name, desc) {
    return fetch("https://ficbook.net/ajax/collections/create?rnd"+rnd(0,10000000), {
        "headers": {
            "accept": "*/*",
            "accept-language": "ru-RU,ru;q=0.9",
            "cache-control": "no-cache",
            "content-type": "multipart/form-data; boundary=----WebKitFormBoundary0u564uNNtvVU8KS7",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://ficbook.net/home/collections",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "------WebKitFormBoundary0u564uNNtvVU8KS7\r\nContent-Disposition: form-data; name=\"name\"\r\n\r\n" + name + "\r\n------WebKitFormBoundary0u564uNNtvVU8KS7\r\nContent-Disposition: form-data; name=\"description\"\r\n\r\n" + desc + "\r\n------WebKitFormBoundary0u564uNNtvVU8KS7\r\nContent-Disposition: form-data; name=\"is_public\"\r\n\r\n1\r\n------WebKitFormBoundary0u564uNNtvVU8KS7--\r\n",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then((response) => 1).then((responseJson) => { return responseJson });;
}
async function addtolib(fic, lib) {
    return fetch("https://ficbook.net/ajax/collections/addfanfic?rnd"+rnd(0,10000000), {
        "headers": {
            "accept": "*/*",
            "accept-language": "ru-RU,ru;q=0.9",
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://ficbook.net/readfic/13098570",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "collection_id=" + lib + "&fanfic_id=" + fic,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then((response) => 1).then((responseJson) => { return responseJson });
}
function randel(arr) {
    return arr[Math.floor((Math.random() * arr.length))];
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function rnd(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
async function libsapi() {
    return fetch("https://ficbook.net/ajax/collections/listforfanfic?rnd"+rnd(0,10000000), {
        "headers": {
            "accept": "*/*",
            "accept-language": "ru-RU,ru;q=0.9",
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://ficbook.net/readfic/13075930",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "fanficId=1",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then((response) => response.json()).then((responseJson) => { return responseJson });
}
class Lib {
    fs = 1000;
    name = "";
    id = -1;
    desc = null;
    constructor(name, desc, id) {
        this.name = name;
        this.desc = desc;
        this.id = id;
    }
    async addfic(fic) {
        await addtolib(fic, this.id);
        this.fs = this.fs - 1;
        if (this.fs === 0) {
            this.updatetagret();
        }
    }
    async updatetagret() {
        await createlib(this.name, randel(this.desc));
        this.fs = 1000;
        let json = await libsapi();
        for (let i = 0; i < json.data.collections.length - 3; i++) {
            if (json.data.collections[i].name === list[j].name) {
                this.id = json.data.collections[i].id;
                break;
            }
        }
    }
}
async function q(text1,text2,target1,target2){return fetch("https://ficbook.net/ajax/public_beta", {
  "headers": {
    "accept": "*/*",
    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://vk.com",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "selected_text=%3Cspan%3E"+text1+"%3C%2Fspan%3E&context="+text2+"%3Cspan+class%3D%22grammar_error%22%3E"+text1+"%3C%2Fspan%3E#ямочалка&comment=https%3A%2F%2Ft.me%2Fyamochalka&fanfic_id="+target1+"&part_id="+target2+"&type=1",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then((r) => r.text()).then((responseJson) => { return responseJson });}
function httpGet(theUrl)
{
    let xmlhttp;
    
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            return xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", theUrl, false);
    xmlhttp.send();
    
    return xmlhttp.response;
}
async function buildlibs(names, desc) {
    let list = [];
    for (let i = 0; i < names.length; i++) {
        await createlib(names[i], randel(desc));
    }
    let json = await libsapi();
    for (let j = 0; j < names.length; j++) {
        list.push(new Lib(json.data.collections[j].name, desc, json.data.collections[j].id))
    }
    return list;
}
async function control(names, desc) {
    let libs = await buildlibs(names, desc);
    const addreqdel = 400;
    let l = 0;
    let dest = 0;
    while (true) {
        let fi = rnd(9000000,14000000);
        fi=13098570;
        part = httpGet("https://ficbook.net/readfic/"+fi).split("li class=\"part\">\n                            <a href=\"/readfic/"+fi+"/")[1].substring(0,8);
        q(randel(names),randel(desc),fi,part);
        l++;
        break;
        await sleep(addreqdel);
        if (l % 100 === 0){
            l++;
            console.log("One more hungred! Perdub will be mine! "+l*100+" add sended///")
        }
    }
}
