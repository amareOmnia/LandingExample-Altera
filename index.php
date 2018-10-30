<?php require $_SERVER['DOCUMENT_ROOT'].'/perch/runtime.php'; ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Altera: Payroll &amp; Insurance</title>
  <link rel="stylesheet" href="css/styles.css">
  <script src="/_assets/js/script.js" type="text/javascript"></script>
</head>

<body>
  <div class="">
    
    <?php include("includes/header.php"); ?>
    
    <!-- oh boy here I go sliding again -->
    
    <?php perch_content_create('Home Slider', array(
      'template' => 'slider.html',
      'multiple' => true,
      ));
      perch_content('Home Slider');
    ?>
    
    <main>
      <article class="text__center spacing__gap-padding-bottom">
        
        <?php perch_content_create('Home Introduction', array(
          'template' => 'introduction.html',
          'multiple' => true,
        ));
        perch_content('Home Introduction');
        ?>
          
        <?php perch_content_create('Home Contact Form', array(
          'template' => 'contact_form.html',
          // 'multiple' => false,
        ));
        perch_content('Home Contact Form');
        ?>
      </article>
        
        <article class="text__center background__blue spacing__gap-padding-bottom-smaller">

          <?php perch_content_create('Services', array(
            'template' => 'services-text.html',
            'multiple' => true,
          ));
          perch_content('Services');
          ?>
          
          <?php perch_content_create('Service-Options', array(
            'template' => 'services-icons.html',
            'multiple' => true,
          ));
          perch_content('Service-Options');
          ?>
          </article>
        </main>
        
        <footer class="footer-fineprint">
          <!-- Bottom redirects need links -->
          
          <?php perch_content_create('Footer-Links', array(
            'template' => 'footer-links.html',
            'multiple' => true,
          ));
          perch_content('Footer-Links');
          ?>
          
          <div class="spacing__float-clear"></div>
          <small>&copy; <?php echo date("Y"); ?> Altera Payroll &amp; Insurance. All rights reserved. <a href="#" target="_blank" class="link__camo">Privacy Policy</a></small>
        </footer>
      </div>
    </body>
    
    </html>
    