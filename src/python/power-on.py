import RPi.GPIO as GPIO
import time

# Set up GPIO pin
PIN = 18
GPIO.setmode(GPIO.BCM)  # Use Broadcom pin numbering
GPIO.setup(PIN, GPIO.OUT)

try:
    GPIO.output(PIN, GPIO.HIGH)  # Set pin HIGH
    time.sleep(1)  # Wait for 1 second
    GPIO.output(PIN, GPIO.LOW)   # Set pin LOW
finally:
    GPIO.cleanup()  # Reset GPIO settings
