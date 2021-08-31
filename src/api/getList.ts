import * as sprequest from 'sp-request';
import { auth } from '../config';

auth.getContext().then(context => {

  const spr = sprequest.create(context.authOptions);
  spr.get(`${context.siteUrl}/_api/web/lists/getbyid('6365F591-0251-4B6C-BC46-C282950E8CA5')`)
    .then(response => {
      console.log(`List title: ${response.body.d.Title}`);
    })
    .catch(console.log);


}).catch(console.log);
