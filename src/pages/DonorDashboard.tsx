import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Heart, 
  MapPin, 
  Clock, 
  User, 
  Phone, 
  Settings, 
  History,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react";
import { useState } from "react";

const DonorDashboard = () => {
  const [isAvailable, setIsAvailable] = useState(true);
  
  const donorInfo = {
    name: "John Smith",
    bloodGroup: "O+",
    lastDonation: "45 days ago",
    totalDonations: 12,
    phone: "+1 (555) 123-4567"
  };

  const nearbyRequests = [
    {
      id: 1,
      patientName: "Emergency Patient #1247",
      bloodGroup: "O+",
      unitsNeeded: 2,
      urgency: "Critical",
      hospital: "City General Hospital",
      distance: "1.2 km",
      timeAgo: "5 minutes ago"
    },
    {
      id: 2,
      patientName: "Emergency Patient #1248", 
      bloodGroup: "O+",
      unitsNeeded: 1,
      urgency: "High",
      hospital: "Medical Center East",
      distance: "2.8 km", 
      timeAgo: "12 minutes ago"
    },
    {
      id: 3,
      patientName: "Emergency Patient #1249",
      bloodGroup: "O+", 
      unitsNeeded: 3,
      urgency: "Medium",
      hospital: "Regional Hospital",
      distance: "4.1 km",
      timeAgo: "28 minutes ago"
    }
  ];

  const donationHistory = [
    { date: "Nov 15, 2024", hospital: "City General", status: "Completed" },
    { date: "Sep 20, 2024", hospital: "Medical Center", status: "Completed" },
    { date: "Jul 8, 2024", hospital: "Regional Hospital", status: "Completed" }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "Critical": return "bg-blood text-blood-foreground";
      case "High": return "bg-emergency text-emergency-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {donorInfo.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">Hi {donorInfo.name.split(' ')[0]}, thanks for being a donor! 🩸</h1>
                <p className="text-muted-foreground">Blood Group: {donorInfo.bloodGroup}</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Profile Settings
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Availability Toggle */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-blood" />
                  <span>Donation Availability</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">
                      {isAvailable ? "Available for donation" : "Not available"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {isAvailable ? "You'll receive notifications for blood requests" : "You won't receive any notifications"}
                    </p>
                  </div>
                  <Switch 
                    checked={isAvailable} 
                    onCheckedChange={setIsAvailable}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Nearby Requests */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Nearby Blood Requests</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {nearbyRequests.map((request) => (
                  <div key={request.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-blood/10 rounded-full">
                          <User className="h-5 w-5 text-blood" />
                        </div>
                        <div>
                          <p className="font-medium">{request.patientName}</p>
                          <p className="text-sm text-muted-foreground">{request.hospital}</p>
                        </div>
                      </div>
                      <Badge className={getUrgencyColor(request.urgency)}>
                        {request.urgency}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Blood Type:</span>
                        <p className="font-medium">{request.bloodGroup}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Units Needed:</span>
                        <p className="font-medium">{request.unitsNeeded}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Distance:</span>
                        <p className="font-medium">{request.distance}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {request.timeAgo}
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <XCircle className="h-4 w-4 mr-1" />
                          Decline
                        </Button>
                        <Button size="sm" className="bg-success hover:bg-success/90">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Accept
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Your Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blood">{donorInfo.totalDonations}</div>
                  <div className="text-sm text-muted-foreground">Total Donations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success">36+</div>
                  <div className="text-sm text-muted-foreground">Lives Potentially Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-medium">{donorInfo.lastDonation}</div>
                  <div className="text-sm text-muted-foreground">Last Donation</div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>{donorInfo.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{donorInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-muted-foreground" />
                  <span>Blood Group: {donorInfo.bloodGroup}</span>
                </div>
              </CardContent>
            </Card>

            {/* Recent History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <History className="h-5 w-5" />
                  <span>Recent Donations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {donationHistory.map((donation, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div>
                        <p className="font-medium">{donation.date}</p>
                        <p className="text-muted-foreground">{donation.hospital}</p>
                      </div>
                      <Badge variant="secondary" className="bg-success/10 text-success">
                        {donation.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;