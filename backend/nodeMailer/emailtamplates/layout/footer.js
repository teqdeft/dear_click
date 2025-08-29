require("dotenv");

const footer = (data) => { // data = {content:"html content", receiverName}
   return (
      `
      <!-- Footer Starts-->
         </td>
							</tr>
							<tr>
							   <td valign="top" style="font-size:16px; line-height: 1.8; font-weight:400; color:#231f20;">
								  <p style=" margin-top: 50px;">Best Regards,<br><strong>Dear Click</strong></p>
								  <p style="margin:0px"><br></p>
							   </td>
							</tr>
						</table>
                    </td>
                    </tr>
                     </table>
                  </td>
               </tr>

               <tr>
                  <td align="center" style="text-align: center;">
                     <table width="100%" border="0" cellspacing="0" cellpadding="0">
                     <tr>
                         <td>&nbsp;</td>
                      </tr>
                        <tr>
                           <td>&nbsp;</td>
                        </tr>
                        <tr>
                           <td style="width: 100%; text-align: center;">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                 <tr>
                                    <td style="width: 100%; text-align: center;">
										<a href="#" target="_blank" style="display: block;">
											<img width="120px" style="width: 120px;" src="http://hob.studioubique.com/assets/image/mobile-logo.png"
                                             alt="" />
										</a>
									</td>
                                 </tr>
                                 <tr>
                                    <td style="padding-top: 5px; padding-bottom: 5px; width: 100%; text-align: center;">
                                    </td>
                                 </tr>
                              </table>
                           </td>
                        </tr>
                        <tr>
                           <td style="text-align: center;" align="center">
                              <table border="0" cellspacing="0" cellpadding="0" align="center"
                                 style="text-align: center; margin: 0 auto;">
                                 <tr>
                                    <td height="20px" valign="middle">
                                     
                                    </td>
                                    <td height="20px" width="1px"
                                       style="width: 1px; padding-right: 13px; padding-left: 13px; height: 20px; color:#DCB86B;"
                                       valign="middle">
                                      |
                                    </td>
                                   
                                 </tr>
                              </table>
                           </td>
                        </tr>
                        <tr>
                           <td>&nbsp;</td>
                        </tr>
                        <tr>
                           <td>&nbsp;</td>
                        </tr>
                     </table>
                  </td>
               </tr>
            </table>

         </td>
      </tr>
   </table>

</body>
<!-- Footer Ends-->
</html>
         `
   )
}

module.exports = { footer }
