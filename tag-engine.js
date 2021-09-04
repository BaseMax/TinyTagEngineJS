/*
 * @Author: Max Base
 * @Date: 2021-08-31, 2021-09-04
 * Repository: https://github.com/BaseMax/TinyTagEngineJS
 */

const tag_engine = (input, tags) => {
    if(tags === undefined || tags === []) tags = {};

    let res = input;

    for( let tag in tags) {
        const pattern = `\\[(\\s*|)${tag}(\\s*|)(\\:([^\\]]+)|)\\]`;
        // console.log(tag, pattern);
        const reg = new RegExp(pattern, 'g');
        res = res.replace(reg, function(e) {
            const id = e.split(reg);
            // console.log("input", e);
            // console.log("splits", id);
            if(!id || id[4] === undefined) {
                id[4] = "";
            }
            return tags[tag](String(id[4]).trim());
        });
    }

    return res;
};
