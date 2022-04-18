// import React, { useState } from 'react'
// import './home.css'

// const NewsletterForm = () => {

//     <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css" rel="stylesheet" type="text/css">

//     <div id="mc_embed_signup">
//       <form action="https://gmail.us14.list-manage.com/subscribe/post?u=981c184d6b2fa3f88da4d8900&amp;id=3866219626" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
//         <div id="mc_embed_signup_scroll">
// 	        <h2>Subscribe</h2>
//           <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
//           <div className="mc-field-group">
//             <label for="mce-EMAIL">Email Address  <span className="asterisk">*</span>
//           </label>
// 	        <input type="email" value="" name="EMAIL" clasNames="required email" id="mce-EMAIL"></input>
//           </div>
//           <div id="mce-responses" className="clear foot">
//             <div className="response" id="mce-error-response" style="display:none"></div>
//             <div className="response" id="mce-success-response" style="display:none"></div>
//           </div> 

          
//           <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_981c184d6b2fa3f88da4d8900_3866219626" tabindex="-1" value=""/></div>
//           <div className="optionalParent">
//               <div className="clear foot">
//                   <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></input>
//                   <p className="brandingLogo"><a href="http://eepurl.com/hZSIz1" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"/></a></p>
//               </div>
//           </div>
//         </div>
//       </form>
//     </div>
// <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
// <!--End mc_embed_signup--></link>

// }

//     // const [ error, setError ] = useState(null);
//     // const [ email, setEmail ] = useState(null);
  
//     // /**
//     //  * Handle form submit.
//     //  *
//     //  * @return {{value}|*|boolean|null}
//     //  */
//     // const handleFormSubmit = () => {
  
//     //   setError(null);
  
//     //   if ( ! email ) {
//     //     setError( 'Please enter a valid email address' );
//     //     return null;
//     //   }
  
//     //   const isFormValidated = onValidated({ EMAIL: email });
  
//     //   // On success return true
//     //   return email && email.indexOf("@") > -1 && isFormValidated;
//     // }
  
//     // /**
//     //  * Handle Input Key Event.
//     //  *
//     //  * @param event
//     //  */
//     // const handleInputKeyEvent = ( event ) => {
//     //   setError(null);
//     //   // Number 13 is the "Enter" key on the keyboard
//     //   if (event.keyCode === 13) {
//     //     // Cancel the default action, if needed
//     //     event.preventDefault();
//     //     // Trigger the button element with a click
//     //     handleFormSubmit();
//     //   }
//     // }
  
//     // /**
//     //  * Extract message from string.
//     //  *
//     // //  * @param {String} message
//     // //  * @return {null|*}
//     // //  */
//     // // const getMessage = (message) => {
//     // //   if ( !message ) {
//     // //     return null;
//     // //   }
//     // //   const result = message?.split('-') ?? null;
//     // //   if ( "0" !== result?.[0]?.trim() ) {
//     // //     return sanitize(message);
//     // //   }
//     // //   const formattedMessage = result?.[1]?.trim() ?? null;
//     // //   return formattedMessage ? sanitize( formattedMessage ) : null;
//     // // }
  
//     // return (
//     //   <div>
//     //     <h3 className="mb-1 uppercase font-bold">Subscribe to newsletter</h3>
//     //     <div className="flex newsletter-input-fields">
//     //       <div className="mc-field-group">
//     //         <input
//     //           onChange={(event) => setEmail(event?.target?.value ?? '')}
//     //           type="email"
//     //           placeholder="Your email"
//     //           className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-4 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
//     //           onKeyUp={(event) => handleInputKeyEvent(event)}
//     //         />
//     //       </div>
//     //       <div className="button-wrap wp-block-button">
//     //         <button className="cursor-pointer	text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded" onClick={handleFormSubmit}>
//     //           Submit
//     //         </button>
//     //       </div>
//     //     </div>
//     //     <div className="min-h-42px">
//     //       { 'sending' === status ? <Loading showSpinner message="Sending..." contentColorClass="text-white" hasVisibilityToggle={false}/> : null }
//     //       {'error' === status || error ? (
//     //         <div
//     //           className="text-red-700 pt-2"
//     //           dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
//     //         />
//     //       ) : null }
//     //       {'success' === status && 'error' !== status && !error && (
//     //         <div className="text-green-200 font-bold pt-2" dangerouslySetInnerHTML={{ __html: sanitize(message) }} />
//     //       )}
//     //     </div> */}
//     //   </div>
//     // );
//   // }
  
//   export default NewsletterForm