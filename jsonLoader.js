const { JSONLoader } = require( "langchain/document_loaders/fs/json");
const sendChatToChatGPT = async (chatJson) => {

    const fs = require('fs');
    const {join} = require('path');
    const dirPath = join(__dirname, './data');
    // Create the directory if it doesn't exist
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, {recursive: true});
    }
    const filePath = join(dirPath, 'myJson.json');
    console.log(JSON.stringify(chatJson, null, 2));
    fs.writeFileSync(filePath, JSON.stringify(chatJson));
    // Create a new JSONLoader instance using jsonString
    const loader = new JSONLoader(filePath);
    const document = await loader.load();

    //delete the file defined by the variable filePath
    fs.unlinkSync(filePath);

    console.log(document.length);
    return {documentLength:document.length}
}

module.exports ={sendChatToChatGPT}


