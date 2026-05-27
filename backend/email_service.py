import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from datetime import datetime

def send_booking_email(booking_data):
    """
    Send booking confirmation email using Gmail SMTP
    """
    # Email configuration from environment variables
    GMAIL_USER = os.getenv('GMAIL_USER', '')
    GMAIL_APP_PASSWORD = os.getenv('GMAIL_APP_PASSWORD', '')
    RECIPIENT_EMAIL = 'info@bagdrop.co'
    
    # Check if credentials are configured
    if not GMAIL_USER or not GMAIL_APP_PASSWORD:
        print("⚠️  Email credentials not configured. Booking data saved but email not sent.")
        return False
    
    try:
        # Create message
        msg = MIMEMultipart('alternative')
        msg['From'] = GMAIL_USER
        msg['To'] = RECIPIENT_EMAIL
        msg['Subject'] = f"New Booking Request from {booking_data['fullName']}"
        
        # Format the pickup date
        pickup_date = datetime.fromisoformat(booking_data['preferredPickupDate'].replace('Z', '+00:00'))
        formatted_date = pickup_date.strftime('%B %d, %Y')
        
        # Create HTML email body
        html_body = f"""
        <html>
          <head>
            <style>
              body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
              .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
              .header {{ background-color: #ea580c; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }}
              .content {{ background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }}
              .section {{ margin-bottom: 25px; background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }}
              .section-title {{ font-size: 16px; font-weight: bold; color: #ea580c; margin-bottom: 15px; border-bottom: 2px solid #ea580c; padding-bottom: 8px; }}
              .info-row {{ margin-bottom: 10px; }}
              .label {{ font-weight: bold; color: #555; display: inline-block; width: 180px; }}
              .value {{ color: #333; }}
              .footer {{ text-align: center; padding: 20px; color: #666; font-size: 12px; }}
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">🎒 New Booking Request</h1>
                <p style="margin: 10px 0 0 0;">Bagdrop Baggage Delivery Service</p>
              </div>
              <div class="content">
                <div class="section">
                  <div class="section-title">📍 Pickup Details</div>
                  <div class="info-row">
                    <span class="label">Pickup Location:</span>
                    <span class="value">{booking_data['pickupLocation']}</span>
                  </div>
                  <div class="info-row">
                    <span class="label">Pickup Address:</span>
                    <span class="value">{booking_data['pickupAddress']}</span>
                  </div>
                </div>
                
                <div class="section">
                  <div class="section-title">📦 Drop Off Details</div>
                  <div class="info-row">
                    <span class="label">Drop Off Location:</span>
                    <span class="value">{booking_data['dropOffLocation']}</span>
                  </div>
                  <div class="info-row">
                    <span class="label">Drop Off Address:</span>
                    <span class="value">{booking_data['dropOffAddress']}</span>
                  </div>
                </div>
                
                <div class="section">
                  <div class="section-title">📅 Delivery Information</div>
                  <div class="info-row">
                    <span class="label">Preferred Pickup Date:</span>
                    <span class="value">{formatted_date}</span>
                  </div>
                  <div class="info-row">
                    <span class="label">Delivery Type:</span>
                    <span class="value">{booking_data['deliveryType']}</span>
                  </div>
                  <div class="info-row">
                    <span class="label">Number of Bags/Boxes:</span>
                    <span class="value">{booking_data['numberOfBags']}</span>
                  </div>
                </div>
                
                <div class="section">
                  <div class="section-title">👤 Customer Information</div>
                  <div class="info-row">
                    <span class="label">Full Name:</span>
                    <span class="value">{booking_data['fullName']}</span>
                  </div>
                  <div class="info-row">
                    <span class="label">Email:</span>
                    <span class="value"><a href="mailto:{booking_data['email']}">{booking_data['email']}</a></span>
                  </div>
                  <div class="info-row">
                    <span class="label">Phone:</span>
                    <span class="value"><a href="tel:{booking_data['phone']}">{booking_data['phone']}</a></span>
                  </div>
                </div>
              </div>
              <div class="footer">
                <p>This is an automated email from Bagdrop booking system.</p>
                <p>Please contact the customer as soon as possible to confirm the booking.</p>
              </div>
            </div>
          </body>
        </html>
        """
        
        # Attach HTML body
        html_part = MIMEText(html_body, 'html')
        msg.attach(html_part)
        
        # Send email via Gmail SMTP
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login(GMAIL_USER, GMAIL_APP_PASSWORD)
            server.send_message(msg)
        
        print(f"✅ Booking email sent successfully to {RECIPIENT_EMAIL}")
        return True
        
    except Exception as e:
        print(f"❌ Error sending email: {str(e)}")
        return False

def send_franchise_inquiry_email(inquiry_data):
    """
    Send franchise inquiry notification email to info@bagdrop.co
    """
    # Email configuration from environment variables
    GMAIL_USER = os.getenv('GMAIL_USER', '')
    GMAIL_APP_PASSWORD = os.getenv('GMAIL_APP_PASSWORD', '')
    RECIPIENT_EMAIL = 'info@bagdrop.co'
    
    # Check if credentials are configured
    if not GMAIL_USER or not GMAIL_APP_PASSWORD:
        print("⚠️  Email credentials not configured. Inquiry data saved but email not sent.")
        return False
    
    try:
        # Create message
        msg = MIMEMultipart('alternative')
        msg['From'] = GMAIL_USER
        msg['To'] = RECIPIENT_EMAIL
        msg['Subject'] = f"New Franchise Inquiry from {inquiry_data['name']}"
        
        # Map franchise type to readable name
        franchise_type_map = {
            'collection': 'Baggage Collection Center',
            'delivery': 'Delivery Operations Center',
            'both': 'Both Options'
        }
        franchise_type_display = franchise_type_map.get(inquiry_data['franchiseType'], inquiry_data['franchiseType'])
        
        # Create HTML email body
        html_body = f"""
        <html>
          <head>
            <style>
              body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
              .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
              .header {{ background-color: #ea580c; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }}
              .content {{ background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }}
              .section {{ margin-bottom: 25px; background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }}
              .section-title {{ font-size: 16px; font-weight: bold; color: #ea580c; margin-bottom: 15px; border-bottom: 2px solid #ea580c; padding-bottom: 8px; }}
              .info-row {{ margin-bottom: 10px; }}
              .label {{ font-weight: bold; color: #555; display: inline-block; width: 180px; }}
              .value {{ color: #333; }}
              .footer {{ text-align: center; padding: 20px; color: #666; font-size: 12px; }}
              .highlight {{ background-color: #fff3cd; padding: 10px; border-radius: 4px; margin-top: 15px; }}
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">🤝 New Franchise Inquiry</h1>
                <p style="margin: 10px 0 0 0;">Bagdrop Partner Program</p>
              </div>
              <div class="content">
                <div class="section">
                  <div class="section-title">👤 Applicant Information</div>
                  <div class="info-row">
                    <span class="label">Name:</span>
                    <span class="value">{inquiry_data['name']}</span>
                  </div>
                  <div class="info-row">
                    <span class="label">Email:</span>
                    <span class="value"><a href="mailto:{inquiry_data['email']}">{inquiry_data['email']}</a></span>
                  </div>
                  <div class="info-row">
                    <span class="label">Phone:</span>
                    <span class="value"><a href="tel:{inquiry_data['phone']}">{inquiry_data['phone']}</a></span>
                  </div>
                  <div class="info-row">
                    <span class="label">City:</span>
                    <span class="value">{inquiry_data['city']}</span>
                  </div>
                </div>
                
                <div class="section">
                  <div class="section-title">🏪 Franchise Interest</div>
                  <div class="info-row">
                    <span class="label">Interested In:</span>
                    <span class="value"><strong>{franchise_type_display}</strong></span>
                  </div>
                  <div class="highlight">
                    <strong>Next Steps:</strong> Contact the applicant to discuss franchise requirements, investment details, and location assessment.
                  </div>
                </div>
              </div>
              <div class="footer">
                <p>This is an automated email from Bagdrop franchise inquiry system.</p>
                <p>Please follow up with the applicant within 24-48 hours.</p>
              </div>
            </div>
          </body>
        </html>
        """
        
        # Attach HTML body
        html_part = MIMEText(html_body, 'html')
        msg.attach(html_part)
        
        # Send email via Gmail SMTP
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login(GMAIL_USER, GMAIL_APP_PASSWORD)
            server.send_message(msg)
        
        print(f"✅ Franchise inquiry email sent successfully to {RECIPIENT_EMAIL}")
        return True
        
    except Exception as e:
        print(f"❌ Error sending franchise inquiry email: {str(e)}")
        return False
