: '

9. Escreva um Shell Script que receba um diretório como argumento (ou parâmetro). Se o argumento não for um diretório, mostre a mensagem: "O argumento _ não é um diretório!". Se o argumento for um diretório, conte quantos arquivos existem nele e mostre a seguinte mensagem: "O _ tem _ arquivos.", em que você deve substituir os "_" pelo diretório e a quantidade de arquivos nele, respectivamente.

'

#!/bin/bash

diretorio=$1

if [ -d "$diretorio" ]
then
    arquivo=`ls -l $diretorio | wc -1`
    echo "O $diretorio tem $arquivos arquivos"
else
    echo "O argumento $diretorio não é um diretório"
fi
