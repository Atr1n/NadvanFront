<?
require_once(__DIR__ . '/crest.php');

$sName = htmlspecialchars($_POST["name"]);
$sPhone = htmlspecialchars($_POST["phone"]);
// $sEmail = htmlspecialchars($_POST["email"]);
$sTitle = htmlspecialchars($_POST["title"]);
$sComment = htmlspecialchars($_POST["notes"]);

//Форматируем телефон и почту для сохранения
$arPhone = (!empty($sPhone)) ? array(array('VALUE' => $sPhone, 'VALUE_TYPE' => 'WORK')) : array();
// $arEmail = (!empty($sEmail)) ? array(array('VALUE' => $sEmail, 'VALUE_TYPE' => 'HOME')) : array();

$contact = array(
  'NAME' => $sName,
  'PHONE' => $arPhone,
  // 'EMAIL' => $arEmail,
);

//Отправляем лид
echo '<PRE>';
print_r(CRest::call(
   'crm.lead.add',
   [
      'fields' =>[
          'TITLE' => $sTitle,//*Lead Name[string]
          'NAME' => $contact['NAME'],//Name[string]
          'PHONE' => $contact['PHONE'],//Phone[crm_multifield]
          //'EMAIL' => $contact['EMAIL'],//E-mail[crm_multifield]
          'COMMENTS' => $sComment,//E-mail[crm_multifield]
      ]
  ])
);

echo '</PRE>';
?>
