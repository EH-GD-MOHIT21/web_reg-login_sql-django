from django.shortcuts import render
from .models import userdata 
# Create your views here.
def index(request):
    return render(request,'index.html')

def login(request):
    return render(request,'login.html')

def verify(request):
    uname = request.POST['uname']
    passwd = request.POST['password']
    if userdata.objects.filter(username=uname,password=passwd).exists():
        return render(request, 'result.html' , {'result':'success'})
    else:
        return render(request, 'result.html' , {'result':'Invalid Username or password.'})

def register(request):
    fname = request.POST["fname"]
    lname = request.POST["lname"]
    age = request.POST["age"]
    mail = request.POST["mail"]
    passwd = request.POST["pass"]
    uname = request.POST["uname"]

    if userdata.objects.filter(username=uname).exists():
        return render(request,'result.html' , {"result":"Failure User Exists with same username."})
    if userdata.objects.filter(mail=mail).exists():
        return render(request,'result.html' , {"result":"Failure User Exists with same mail"})

    myobj = userdata(FirstName=fname,LastName=lname,age=age,mail=mail,username=uname,password=passwd)
    myobj.save()
    print("entry done..")

    return render(request,'result.html' , {"result":"Success"})