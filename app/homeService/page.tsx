import React from "react";

const homeService = () => {
  const sercice =[
    {
      id:1,
      name:"Website design & development",
      discription:"locdjckdb",
      image:<svg style={{height:"200px"}} viewBox="0 0 1024 1024" fill="#000000" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M1015.848 687.82H8.156a7.992 7.992 0 0 1-7.998-7.996 7.994 7.994 0 0 1 7.998-7.998h1007.692a7.992 7.992 0 0 1 7.996 7.998 7.992 7.992 0 0 1-7.996 7.996zM512 767.766c-17.636 0-31.99-14.34-31.99-31.99s14.354-31.99 31.99-31.99 31.992 14.34 31.992 31.99-14.356 31.99-31.992 31.99z m0-47.984c-8.826 0-15.996 7.184-15.996 15.994s7.17 15.994 15.996 15.994c8.824 0 15.996-7.184 15.996-15.994s-7.172-15.994-15.996-15.994zM376.136 975.732a8.01 8.01 0 0 1-7.81-9.73l31.99-143.956c0.954-4.296 5.202-6.984 9.544-6.078a8.014 8.014 0 0 1 6.078 9.544l-31.99 143.956a8.004 8.004 0 0 1-7.812 6.264zM647.864 975.732a8 8 0 0 1-7.808-6.264l-31.988-143.956a8.01 8.01 0 0 1 6.074-9.544c4.376-0.906 8.59 1.782 9.542 6.078l31.992 143.956a8.008 8.008 0 0 1-7.812 9.73z" fill=""></path><path d="M671.954 975.732H352.05a7.992 7.992 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996h319.904a7.992 7.992 0 0 1 7.996 7.996 7.992 7.992 0 0 1-7.996 7.998zM967.86 640.086H56.14a7.994 7.994 0 0 1-7.998-7.998V104.25a7.994 7.994 0 0 1 7.998-7.998h911.72c4.422 0 8 3.578 8 7.998v527.838a7.994 7.994 0 0 1-8 7.998z m-903.722-15.996h895.726V112.248H64.138v511.842z" fill=""></path><path d="M967.86 800.038H56.14c-30.866 0-55.982-25.118-55.982-55.982V104.25c0-30.866 25.118-55.982 55.982-55.982h911.72c30.868 0 55.984 25.118 55.984 55.982v639.804c0 30.866-25.118 55.984-55.984 55.984zM56.14 64.262c-22.056 0-39.988 17.94-39.988 39.988v639.804c0 22.054 17.932 39.986 39.988 39.986h911.72c22.058 0 39.988-17.932 39.988-39.986V104.25c0-22.048-17.93-39.988-39.988-39.988H56.14z" fill=""></path><path d="M967.86 831.778H56.14c-31.396 0-55.982-24.586-55.982-55.982v-31.99a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v31.99c0 22.43 17.558 39.986 39.988 39.986h911.72c22.434 0 39.988-17.556 39.988-39.986v-31.74a7.994 7.994 0 0 1 8-7.998 7.992 7.992 0 0 1 7.996 7.998v31.74c-0.002 31.396-24.588 55.982-55.986 55.982zM88.13 640.086a7.994 7.994 0 0 1-7.998-7.998V104.25a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v527.838a7.994 7.994 0 0 1-7.998 7.998z" fill=""></path><path d="M72.136 160.232H56.14c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h15.996c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998zM72.136 208.218H56.14c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h15.996c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998zM72.136 256.204H56.14c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h15.996c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998zM72.136 304.19H56.14c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h15.996c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998zM72.136 352.174H56.14c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h15.996c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998zM72.136 400.16H56.14a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h15.996a7.994 7.994 0 0 1 7.998 7.998 7.996 7.996 0 0 1-7.998 7.998zM72.136 448.144H56.14a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h15.996a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM72.136 496.13H56.14a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h15.996a7.994 7.994 0 0 1 7.998 7.998 7.996 7.996 0 0 1-7.998 7.998zM72.136 544.116H56.14a7.994 7.994 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996h15.996a7.992 7.992 0 0 1 7.998 7.996 7.994 7.994 0 0 1-7.998 7.998zM72.136 592.102H56.14c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h15.996c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998zM200.096 160.232h-63.98c-4.42 0-7.998-3.576-7.998-7.998s3.576-7.998 7.998-7.998h63.98c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998zM456.016 208.218h-191.94c-4.42 0-7.998-3.578-7.998-7.998s3.576-7.998 7.998-7.998h191.94c4.422 0 7.998 3.578 7.998 7.998s-3.576 7.998-7.998 7.998zM232.086 208.218H152.11c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h79.976c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998zM456.016 256.204h-15.994c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h15.994c4.422 0 7.998 3.576 7.998 7.998s-3.576 7.998-7.998 7.998zM408.032 256.204H168.106c-4.42 0-7.998-3.576-7.998-7.998s3.576-7.998 7.998-7.998h239.926c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998zM216.09 352.174H168.106c-4.42 0-7.998-3.576-7.998-7.998s3.576-7.998 7.998-7.998h47.986c4.42 0 7.998 3.576 7.998 7.998s-3.58 7.998-8 7.998zM456.016 352.174H248.082c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h207.936c4.422 0 7.998 3.576 7.998 7.998s-3.578 7.998-8 7.998zM456.016 304.19H184.1c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h271.916c4.422 0 7.998 3.578 7.998 7.998s-3.576 7.998-7.998 7.998zM456.016 400.16h-63.98a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h63.98a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM408.032 448.144H152.11a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h255.922a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM280.072 544.116h-127.96a7.994 7.994 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996h127.96a7.992 7.992 0 0 1 7.998 7.996 7.994 7.994 0 0 1-7.998 7.998zM456.016 496.13h-79.974a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h79.974a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM344.052 496.13H168.106a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h175.946a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM200.096 592.102h-63.98c-4.42 0-7.998-3.578-7.998-7.998s3.576-7.998 7.998-7.998h63.98c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998zM456.016 448.144h-15.994a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h15.994a7.994 7.994 0 0 1 7.998 7.998 7.992 7.992 0 0 1-7.998 7.998zM360.046 400.16h-191.94a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h191.942a7.994 7.994 0 0 1 7.998 7.998 7.996 7.996 0 0 1-8 7.998z" fill=""></path><path d="M512 640.086a7.994 7.994 0 0 1-7.998-7.998V104.25A7.994 7.994 0 0 1 512 96.252a7.992 7.992 0 0 1 7.996 7.998v527.838a7.992 7.992 0 0 1-7.996 7.998z" fill=""></path><path d="M903.878 544.116a7.984 7.984 0 0 1-6.7-3.638l-97.27-149.634-97.266 149.634c-2.39 3.732-7.372 4.748-11.058 2.358a8.012 8.012 0 0 1-2.344-11.074l103.968-159.952c2.938-4.544 10.464-4.544 13.402 0l103.968 159.952a8.012 8.012 0 0 1-2.344 11.074c-1.34 0.872-2.856 1.28-4.356 1.28z" fill=""></path><path d="M631.964 544.116a7.998 7.998 0 0 1-6.656-12.434l63.98-95.876a8 8 0 0 1 13.308 0l31.524 47.25a8 8 0 0 1-2.218 11.09c-3.672 2.42-8.636 1.468-11.09-2.218l-24.868-37.278-57.328 85.904a7.99 7.99 0 0 1-6.652 3.562zM631.964 432.15c-22.058 0-39.988-17.94-39.988-39.988s17.93-39.988 39.988-39.988c22.054 0 39.988 17.94 39.988 39.988 0.002 22.048-17.932 39.988-39.988 39.988z m0-63.98c-13.23 0-23.992 10.762-23.992 23.992s10.762 23.992 23.992 23.992 23.992-10.762 23.992-23.992-10.76-23.992-23.992-23.992z" fill=""></path><path d="M919.876 544.116H567.984c-4.422 0-8-3.576-8-7.998V328.182a7.994 7.994 0 0 1 8-7.998h351.89a7.992 7.992 0 0 1 7.996 7.998v207.936a7.988 7.988 0 0 1-7.994 7.998z m-343.896-15.994h335.898V336.18H575.98v191.942z" fill=""></path><path d="M919.876 160.232H567.984c-4.422 0-8-3.576-8-7.998s3.578-7.998 8-7.998h351.89c4.422 0 7.996 3.576 7.996 7.998s-3.574 7.998-7.994 7.998z" fill=""></path><path d="M919.876 288.194a7.99 7.99 0 0 1-7.996-7.998v-127.96c0-4.42 3.574-7.998 7.996-7.998s7.996 3.576 7.996 7.998v127.96a7.992 7.992 0 0 1-7.996 7.998z" fill=""></path><path d="M919.876 288.194H567.984c-4.422 0-8-3.576-8-7.998s3.578-7.998 8-7.998h351.89c4.422 0 7.996 3.576 7.996 7.998s-3.574 7.998-7.994 7.998z" fill=""></path><path d="M871.89 224.212H567.984c-4.422 0-8-3.576-8-7.998s3.578-7.998 8-7.998h303.906c4.418 0 7.996 3.576 7.996 7.998s-3.578 7.998-7.996 7.998z" fill=""></path><path d="M919.876 592.102H567.984c-4.422 0-8-3.578-8-7.998s3.578-7.998 8-7.998h351.89c4.422 0 7.996 3.578 7.996 7.998s-3.574 7.998-7.994 7.998z" fill=""></path></g></svg>
    },
    {
      id:2,
      name:"Mobile app development",
      discription:"locdjckdb",
      image:<svg style={{height:"200px"}} fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 502.664 502.664" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M310.166,397.593H75.951V61.671h234.151v25.13h31.472V54.811C341.595,24.677,316.853,0,286.74,0H99.355 C69.199,0,44.522,24.677,44.522,54.811v393.02c0,30.178,24.677,54.833,54.833,54.833H286.74 c30.113,0,54.855-24.655,54.855-54.833V397.01h-31.429C310.166,397.01,310.166,397.593,310.166,397.593z M193.015,475.226 c-13.892,0-25.108-11.238-25.108-25.108c0-13.913,11.217-25.13,25.108-25.13c13.913,0,25.152,11.238,25.152,25.13 C218.167,463.988,206.929,475.226,193.015,475.226z"></path> <rect x="102.785" y="95.386" width="70.256" height="42.84"></rect> <rect x="102.785" y="205.073" width="70.256" height="42.84"></rect> <rect x="102.785" y="319.873" width="70.256" height="42.818"></rect> <path d="M422.399,223.905c-2.481-12.986-7.507-25.001-14.625-35.506l25.195-25.216l-25.734-25.648l-25.152,25.173 c-10.462-7.161-22.541-12.123-35.484-14.625v-35.7h-36.411v35.7c-12.964,2.502-24.936,7.485-35.505,14.625l-25.108-25.173 l-25.734,25.669l25.152,25.216c-7.097,10.505-12.101,22.52-14.582,35.484h-35.657v36.39h35.656 c2.481,12.921,7.507,24.936,14.603,35.484l-25.173,25.173l25.734,25.626l25.173-25.152c10.527,7.161,22.541,12.144,35.505,14.668 v35.635h36.411v-35.656c12.942-2.481,24.936-7.507,35.484-14.625l25.152,25.152l25.734-25.648l-25.195-25.173 c7.118-10.505,12.123-22.541,14.625-35.505h35.678l0,0v-36.368H422.399z M328.437,281.693c-21.894,0-39.669-17.688-39.669-39.604 c0-21.894,17.774-39.69,39.669-39.69c21.916,0,39.604,17.774,39.604,39.69C368.041,264.026,350.309,281.693,328.437,281.693z"></path> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
    },
    {
      id:3,
      name:"Shopify e-commerce",
      discription:"locdjckdb",
      image:<svg style={{height:"200px"}} fill="#000000" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className="jam jam-shopify-square"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M13.264 6.833l-.805-.06-.592-.589.592.59s.77.056.805.06c.037.002.08.03.088.08l1.091 7.385-3.09.668L5.65 13.9s.732-5.66.76-5.86c.036-.264.045-.273.325-.36l.902-.28c.194-.82.81-2.432 2.1-2.432.168 0 .363.09.52.299a.841.841 0 0 1 .047-.002c.554 0 .868.472 1.047.985l.299-.092a.337.337 0 0 1 .135-.01zm-2.96 1.708s-.257-.15-.779-.15c-1.353 0-2.023.904-2.023 1.838 0 1.11 1.107 1.14 1.107 1.815a.383.383 0 0 1-.4.386c-.434 0-.948-.441-.948-.441l-.262.866s.5.609 1.48.609c.815 0 1.42-.614 1.42-1.568 0-1.213-1.35-1.411-1.35-1.929 0-.095.031-.471.631-.471.41 0 .743.178.743.178l.381-1.133zm.732-2.195c-.123-.373-.313-.698-.598-.733.071.203.115.46.115.779v.104l.483-.15zm-.952-.67c-.314.135-.674.492-.866 1.233l.997-.308v-.056c0-.385-.052-.67-.13-.87zm-.383-.363c-.926 0-1.447 1.216-1.666 1.962l.788-.244c.187-.978.63-1.468 1.043-1.662a.291.291 0 0 0-.165-.056z"></path><path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"></path></g></svg>
    },
    {
      id:4,
      name:"Product launch",
      discription:"locdjckdb",
      image:<svg style={{height:"200px"}} fill="#000000" viewBox="0 0 52 52" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M38.77,25.61c1.42,0,2.54,1.54,3.79,2.07s3.19.24,4.13,1.24.71,2.84,1.24,4.14S50,35.42,50,36.84s-1.54,2.54-2.07,3.78-.23,3.19-1.24,4.14-2.83.7-4.13,1.24-2.37,2.06-3.79,2.06S36.23,46.53,35,46s-3.19-.24-4.13-1.24-.71-2.84-1.24-4.14-2.07-2.36-2.07-3.78,1.53-2.54,2.07-3.78.23-3.19,1.24-4.14,2.83-.71,4.13-1.24S37.36,25.61,38.77,25.61ZM26.71,41a4.82,4.82,0,0,1,.38.7c.5,1.22.47,2.83.89,4.08H3.39A1.5,1.5,0,0,1,2,44.15H2V42.56A1.51,1.51,0,0,1,3.39,41H26.71ZM43,33.18a.55.55,0,0,0-.81,0h0l-4.38,5-2-2a.55.55,0,0,0-.81,0h0l-.82.77a.52.52,0,0,0,0,.77h0l2.8,2.8a1.13,1.13,0,0,0,.82.35,1.05,1.05,0,0,0,.82-.35l5.19-5.77a.62.62,0,0,0,0-.77h0ZM6.65,12.3A1.38,1.38,0,0,1,8,13.73H8V36a1.38,1.38,0,0,1-1.32,1.43H3.33A1.39,1.39,0,0,1,2,36H2V13.73A1.39,1.39,0,0,1,3.33,12.3H6.65Zm19,0a1.43,1.43,0,0,1,1.43,1.43h0V32c-.68,1.57-2.63,3-2.63,4.81a2.48,2.48,0,0,0,.06.54H21.35A1.43,1.43,0,0,1,19.92,36h0V13.73a1.43,1.43,0,0,1,1.43-1.43h4.3Zm-9.71,0a1.52,1.52,0,0,1,1.59,1.43h0V36a1.52,1.52,0,0,1-1.59,1.43h-1.6A1.52,1.52,0,0,1,12.75,36h0V13.73a1.52,1.52,0,0,1,1.59-1.43h1.6Zm17.91,0a1.52,1.52,0,0,1,1.6,1.43h0V24.21a7,7,0,0,1-1.5.94,19.63,19.63,0,0,1-3.28.69V13.73a1.52,1.52,0,0,1,1.59-1.43h1.59Zm8.63,0a1.39,1.39,0,0,1,1.33,1.43h0v11.5l-.21-.08c-1.58-.67-3-2.63-4.83-2.63a2.79,2.79,0,0,0-.94.17v-9a1.39,1.39,0,0,1,1.33-1.43h3.32Zm-.07-8.36a1.51,1.51,0,0,1,1.4,1.59h0V7.12a1.51,1.51,0,0,1-1.4,1.59h-39A1.5,1.5,0,0,1,2,7.12H2V5.53A1.5,1.5,0,0,1,3.39,3.94h39Z"></path></g></svg>
    },
  ]
  return (
    <div className=" flex justify-center">
      <div className="py-8 ">
       <div className=" mb-10"> <p className="text-2xl font-semibold translate text-slate-400">Service</p>
        <h1 className="text-4xl font-bold">Our core services</h1></div>
        
        <div className="grid md:grid-cols-2 md:gap-x-28 md:gap-y-4 ">
        {sercice?.map((item)=>(
          <>
          <div className=" pb-10"> 
            <h2 className="text-2xl   font-bold  text-[#1d7297]">{item?.name}</h2>
            <p className="text-xl font-extralight text-slate-600">{item?.discription}</p>
            <p className="flex justify-center place-self-center">{item?.image}</p>

          </div> 
          </> ))}
        </div>
        {/* <div className="grid md:grid-cols-2 md:gap-x-28 md:gap-y-4">
          <div className=""> 
            <h2 className="text-2xl font-semibold text-[#1d7297]">Website Development</h2>

          </div>
          <div><h2 className="text-2xl font-semibold text-[#1d7297]">Mobile App Development</h2></div>
          <div>
          <h2 className="text-2xl font-semibold text-[#1d7297]">Shopify E-commerce</h2></div>
          <div>
          <h2 className="text-2xl font-semibold text-[#1d7297]">Product Launch</h2>
          
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default homeService;
