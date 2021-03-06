import axios from "axios";
import { elements } from "./elements";


export class Characters{
    constructor(){
     
    }
    

    async getCharacters(){
        try{
        this.getRes = await axios(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=adfbe33f945bd7bbefc6420a1fe57e84&hash=36d9c6c7b4db64ac4ca23f0fa90cdb40`)
        this.dataResult = this.getRes.data.data.results
        const u = `/portrait_fantastic.`
        this.dataResult.slice(0,10).forEach((cur)=>{
          let markup  = `
          <li class = 'character-items'>
          <a href="charactersInfo.html" onclick="getCharacterId(${cur.id})" draggable="false">
         <img src="${cur.thumbnail.path}${u}${cur.thumbnail.extension}" alt=""  draggable="false">
             <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 230 46" style="width: 100%;" class="border-design">
               <defs>
                 <style>.cls-1{fill:none;}.cls-2,.outline-1{opacity:0.5;}.cls-3,.outline-2,.cls-5{fill:#fff;}.cls-3{opacity:0.08;}.cls-4,.cls-6{fill-rule:evenodd;}.cls-6{fill:url(#IJ2);}.cls-7{opacity:0.2;} .bg{fill:rgba(0,0,0,0.5)}</style>
                 <pattern id="IJ2" data-name="IJ2" width="20" height="20" patternTransform="translate(-117 195)" patternUnits="userSpaceOnUse" viewBox="0 0 20 20">
                   <rect class="cls-1" width="20" height="20"></rect>
                   <rect class="cls-2" width="20" height="20"></rect>
                   <rect class="cls-3" width="1" height="20"></rect>
                   <rect class="cls-3" width="20" height="1"></rect>
                   <polygon class="cls-3" points="1 20.71 0.29 20 20 0.29 20.71 1 1 20.71"></polygon>
                   <polygon class="cls-3" points="-19 20.71 -19.71 20 0 0.29 0.71 1 -19 20.71"></polygon>
                   <polygon class="cls-3" points="1 0.71 0.29 0 20 -19.71 20.71 -19 1 0.71"></polygon>
                   <polygon class="cls-3" points="-19 0.71 -19.71 0 0 -19.71 0.71 -19 -19 0.71"></polygon>
                 </pattern>
               </defs>
               <title>slim-btn-dn-new</title><g id="Layer_2" data-name="Layer 2">
                 <g id="slim-btn-dn-new">
                   <g id="BG" class="cls-2">
                     <polygon class="bg" points="0 0 230 0 184 46 46 46 0 0"></polygon>
                   </g>
                   <g id="OUTLINE" class="outline-1">
                     <path class="outline-2" d="M227.59,1l-44,44H46.41L2.41,1H227.59M230,0H0L46,46H184L230,0Z"></path>
                   </g>
                 </g>
                 </g>
                 
             </svg>
             <h3>${cur.name}</h3>
           </a>
           </li>
          `
          elements.heroes.insertAdjacentHTML("beforeend",markup)
        })
        }
        catch(error){
            console.log(`error`)
        }

      }
    
      async displayHeroes(){
        try{
        this.getRes = await axios(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=adfbe33f945bd7bbefc6420a1fe57e84&hash=36d9c6c7b4db64ac4ca23f0fa90cdb40`)
        this.dataResult = this.getRes.data.data.results
        const u = `/portrait_fantastic.`;
        this.dataResult.forEach((items)=>{
          const addHtml = `
          <a href="charactersInfo.html" onclick="getCharacterId(${items.id})">
          <img src="${items.thumbnail.path}${u}${items.thumbnail.extension}" alt="">
          <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 230 46" style="width: 100%;" class="border-design">
            <defs>
              <style>.cls-1{fill:none;}.cls-2,.outline-1{opacity:0.5;}.cls-3,.outline-2,.cls-5{fill:#fff;}.cls-3{opacity:0.08;}.cls-4,.cls-6{fill-rule:evenodd;}.cls-6{fill:url(#IJ2);}.cls-7{opacity:0.2;} .bg{fill:rgba(0,0,0,0.5)}</style>
              <pattern id="IJ2" data-name="IJ2" width="20" height="20" patternTransform="translate(-117 195)" patternUnits="userSpaceOnUse" viewBox="0 0 20 20">
                <rect class="cls-1" width="20" height="20"></rect>
                <rect class="cls-2" width="20" height="20"></rect>
                <rect class="cls-3" width="1" height="20"></rect>
                <rect class="cls-3" width="20" height="1"></rect>
                <polygon class="cls-3" points="1 20.71 0.29 20 20 0.29 20.71 1 1 20.71"></polygon>
                <polygon class="cls-3" points="-19 20.71 -19.71 20 0 0.29 0.71 1 -19 20.71"></polygon>
                <polygon class="cls-3" points="1 0.71 0.29 0 20 -19.71 20.71 -19 1 0.71"></polygon>
                <polygon class="cls-3" points="-19 0.71 -19.71 0 0 -19.71 0.71 -19 -19 0.71"></polygon>
              </pattern>
            </defs>
            <title>slim-btn-dn-new</title><g id="Layer_2" data-name="Layer 2">
              <g id="slim-btn-dn-new">
                <g id="BG" class="cls-2">
                  <polygon class="bg" points="0 0 230 0 184 46 46 46 0 0"></polygon>
                </g>
                <g id="OUTLINE" class="outline-1">
                  <path class="outline-2" d="M227.59,1l-44,44H46.41L2.41,1H227.59M230,0H0L46,46H184L230,0Z"></path>
                </g>
              </g>
              </g>
              
          </svg>
          <h3>${items.name}</h3>
        </a>
          `
          elements.getCharactersLists.insertAdjacentHTML("beforeend",addHtml)
        })
      } catch(error){

      }
      }

      

      async getSingleCharacter(){
        try{
        let characterId = sessionStorage.getItem('characterId');
        const singleCharacter = await axios(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=adfbe33f945bd7bbefc6420a1fe57e84&hash=36d9c6c7b4db64ac4ca23f0fa90cdb40`)
      const singleData = singleCharacter.data.data.results;
      const u = `/standard_fantastic.`;
      singleData.forEach((character) => {

        const characterSeries = character.series.items.slice(0,5).map((ser) => {
         return `<span>${ser.name}</span>`
        }).join(", ")
      
        const markup = `
        <a href="./index.html"><h6><i class="fas fa-arrow-left"></i> Home</h6></a>
        <div class="img-container">
            <img src="${character.thumbnail.path}${u}${character.thumbnail.extension}" alt="">
        </div>

        <div class="description-container">
            <h1>${character.name}</h1>
            <p>${character.description}</p>
                <p>Series: ${characterSeries}</p>
        </div>
        `
      elements.infoCharacter.insertAdjacentHTML("afterbegin",markup)

      })
    }catch(error){

    }
      }

      texttrim(str, maxLength, { side = "end", ellipsis = "..." } = {}) {
        if (str.length > maxLength) {
          switch (side) {
            case "start":
              return ellipsis + str.slice(-(maxLength - ellipsis.length));
            case "end":
            default:
              return str.slice(0, maxLength - ellipsis.length) + ellipsis;
          }
        }
        return str;
      }

        async getSingleComics(){
          try{
          let characterId = sessionStorage.getItem('characterId')
          const singleComics = await axios(`https://gateway.marvel.com/v1/public/characters/${characterId}/comics?ts=1&apikey=adfbe33f945bd7bbefc6420a1fe57e84&hash=36d9c6c7b4db64ac4ca23f0fa90cdb40`);
          const dataComics = singleComics.data.data.results;
          const u = `/portrait_fantastic.`;
          dataComics.forEach((com) => {
          
            let comicMarkup = ` 
            <div class="character-comics"> 
            <a onclick ="getComicsId(${com.id})">
                <img src="${com.thumbnail.path}${u}${com.thumbnail.extension}" alt="">
                <h3>${this.texttrim(com.title,15)}</h3>
                </a>
            </div>
            `
            elements.characterHolder.insertAdjacentHTML('beforeend',comicMarkup)
          })
        }catch(error){

        }
        }

    }

    window.getCharacterId = function(id){
      window.sessionStorage.setItem('characterId',id)
    }

  