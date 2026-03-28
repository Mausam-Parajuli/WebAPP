from django.shortcuts import render,redirect
from django.contrib import messages
from .models import User

# Create your views here.

def register(request):
    if request.method == "POST":
        name = request.POST.get("name")
        username = request.POST.get("username")
        email = request.POST.get("email")
        password = request.POST.get("password")
        age = request.POST.get("age")
        gender = request.POST.get("gender")
        
                # Check for duplicates
        if User.objects.filter(email=email).exists():
            messages.error(request, "Email already registered.")
            return render(request, "accounts/register.html")

        if User.objects.filter(username=username).exists():
            messages.error(request, "Username already taken.")
            return render(request, "accounts/register.html")

        # Save to database
        User.objects.create(
            name=name,
            username=username,
            email=email,
            password=password, 
            age=age,
            gender=gender
        )
        return redirect("success")
    return render(request,'accounts/register.html')

def success(request):
    return render(request, "accounts/success.html")

def user_list(request):
    users = User.objects.all()  
    return render(request, "accounts/user_list.html", {"users": users})