const translations = {
    en: {
        title: "Welcome",
        content: "This is the home page."
    },
    nl: {
        title: "Welkom",
        content: "Dit is de startpagina."
    }
};
function switchLanguageAndPreserveSelection(language){
     document.getElementById("title").innerText = translations[language].title;
     document.getElementById("content").innerText = translations[language].content;
}

document.getElementById('enButton').addEventListener('click', function(){
    switchLanguageAndPreserveSelection('en');
    localStorage.setItem('language', 'en')
   
})
document.getElementById('nlButton').addEventListener('click', function(){
    switchLanguageAndPreserveSelection('nl');
    localStorage.setItem('language', 'nl')
   
})

window.addEventListener('load', function(){
    const savedLanguage = this.localStorage.getItem('language') || 'en'
    switchLanguageAndPreserveSelection(savedLanguage)
})