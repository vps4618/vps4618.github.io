import pywhatkit

from datetime import datetime



def clk():

    con=True

    while con:

        try:

            H=int(input("Enter the hour in 24 hour clock format:"))

            M=int(input("Enter the minute in 24 hour clock format:"))

        except:

            print("\nInvalid time. Enter digits. Please re-enter")

        else:

            now=datetime.now()

            h=int(now.strftime("%H"))

            m=int(now.strftime("%M"))

            if H>=h and M>m+1 :

                if 0<=H<=24 and 0<=M<60:

                    con=False

                else:

                    print("\nInvalid time. Please re-enter")

            else:

                if 0<=H<=24 and 0<=M<60:

                    print("Message Will be sent tomorrow")

                    w=input("Is it okay ( y-yes , n-no ) :")

                    if w=="y" or w=="Y":

                        con=False

                    else:

                        print("\nPlease re-enter time.")

                else:

                    print("\nInvalid time. Please re-enter")

    return H,M



def num():

    con=True

    while con:

        k="+94"+str(input("Please the phone number : +94"))

        if len(k)==12:

            try:

                v=int(k[1:])

                con=False

            except:

                print("\nPlease enter a valid phone number.")

        else:

            print("\nPlease enter a valid phone number.")

    return k

            



number=num()

msg=str(input("Please enter your message :"))

hour,minute=clk()

print("\n \n    Please wait. Your message is processing. Message will be sent at "+str(hour)+":"+str(minute))

pywhatkit.sendwhatmsg(number,msg,hour,minute,60)

print("\n \n    Your message sent successfully")

