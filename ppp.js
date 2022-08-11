function isJavaScriptFile(index) {
    let jsFile = javaFile.endsWith('.js');
    return jsFile;
}
let javaFile = isJavaScriptFile('app.js')
console.log(javaFile);