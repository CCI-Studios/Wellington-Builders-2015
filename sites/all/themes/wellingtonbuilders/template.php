<?php 
function wellingtonbuilders_theme(&$existing, $type, $theme, $path) {
   $hooks['user_login_block'] = array(
     'template' => 'templates/user-login-block',
     'render element' => 'form',
   );
   return $hooks;
 }
function wellingtonbuilders_preprocess_user_login_block(&$variables) {
  // Add a custom placeholder to username field.
  $variables['form']['name']['#value'] = $variables['form']['name']['#title'];
  $variables['form']['name']['#attributes']['placeholder']=t('Username');
  //$variables['form']['name']['#attributes']['onblur'] = "if (this.value == '') {this.value = '".$variables['form']['name']['#value']."';} ;";
  //$variables['form']['name']['#attributes']['onfocus'] = "if (this.value == '".$variables['form']['name']['#value']."') {this.value = '';} ;";
  // Add a custom placeholder to password field.
  // this will not work until you clicked in input, to make this work see <a href="http://drupal.org/node/75225" title="http://drupal.org/node/75225"rel="nofollow">http://drupal.org/node/75225</a> and apply the patch. There are security implications to doing this.
  $variables['form']['pass']['#value'] = $variables['form']['pass']['#title'];
  $variables['form']['pass']['#attributes']['placeholder']=t('Password');
 // $variables['form']['pass']['#attributes']['onblur'] = "if (this.value == '') {this.value = '".$variables['form']['pass']['#value']."';} ;";
  //$variables['form']['pass']['#attributes']['onfocus'] = "if (this.value == '".$variables['form']['pass']['#value']."') {this.value = '';} ;";


  // Remove the "Username" & "Password" labels from the form.
  unset($variables['form']['name']['#title']);
  unset($variables['form']['pass']['#title']);
    
  // Change the text on the submit button, use CSS to make it an image if you would like
  $variables['form']['actions']['submit']['#value'] = t('SUBMIT');


  // Remove links
  //unset($variables['form']['links']);
  $variables['form']['name']['#required'] = false;
  $variables['form']['pass']['#required'] = false;
  $variables['rendered'] = drupal_render_children($variables['form']);
}
?>