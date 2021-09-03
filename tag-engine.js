// Max Base
// https://github.com/BaseMax/TinyTagEngineJS

const tag_engine = (input, tags) => {
    if(tags === undefined || tags === []) tags = {};

    let res = input;

    for( let tag in tags) {
        const reg = new RegExp(`/\[(\s*|)${tag}(\s*|)(\:(\s*|)([0-9]+)(\s*|)|)\]/g`)
        res = res.replace(reg, function(e) {
            const id = e.match(reg);
            if(!id || id[4] === undefined) {
                id[4] = "";
            }
            return tags[tag](id[4]);
        });
    }

    return res;
};
