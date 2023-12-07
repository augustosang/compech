#include <Adafruit_Fingerprint.h>

SoftwareSerial mySerial(2, 3);

Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial);

int fingerprintID = 0;
const int ledr = 13;

void setup() {
  Serial.begin(9600);
  finger.begin(57600);
  pinMode(ledr, OUTPUT);
  pinMode(6, OUTPUT);
}

void loop() {
  fingerprintID = getFingerprintIDez();

  if (fingerprintID > 0) {
    digitalWrite(ledr, HIGH);
    digitalWrite(6, HIGH); // Envia um pulso elétrico para a porta 5
    delay(2000);           // Espera 1 segundo
    digitalWrite(6, LOW);  // Desliga a energia elétrica na porta 5
    delay(2000);
  } else {
    digitalWrite(ledr, LOW);
  }
}

int getFingerprintIDez() {
  uint8_t p;

  p = finger.getImage();
  if (p != FINGERPRINT_OK)  return -1;

  p = finger.image2Tz();
  if (p != FINGERPRINT_OK)  return -1;

  p = finger.fingerFastSearch();
  if (p != FINGERPRINT_OK)  return -1;

  Serial.println(finger.fingerID);
  return finger.fingerID;
}