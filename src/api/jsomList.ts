import { JsomNode } from 'sp-jsom-node';
import { authConfig } from '../config';
// JAVASCRIPT OBJECT MODEL
(new JsomNode(authConfig)).wizard().then((settings) => {

    let ctx = SP.ClientContext.get_current();
    let web = ctx.get_web();
    let list = web.get_lists().getById('6365F591-0251-4B6C-BC46-C282950E8CA5');
    ctx.load(web);
    ctx.load(list);

    ctx.executeQueryAsync(() => {
        console.log(`List title: ${list.get_title()}`);
    }, console.log);

}).catch(console.log);
