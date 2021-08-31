# Jumble
A simple non-server web app for generating ciphers.

## Caeser Cipher
A Caesar cipher is a very simple encryption algorithm to transform text messages to an unintelligible mess, but one that can be translated back to the original message is the KEY (the shift value) is known. When it comes to ciphers, we refer to the original (to-be-translated) text as the plaintext and the resulting jumbled message as the ciphertext.  

## Square Cipher
The KEY for this cipher is a 5x5 grid of text. Since a 5x5 grid only supports 25 of the 26 letters of the alphabet, we will not include Z. For the purposes of this cipher, a Z in the plaintext translates to the Z in the ciphertext. For all other alphabetical characters, get the position of that character in the regular alphabet, and translate it to the character at the corresponding position in the grid.  
