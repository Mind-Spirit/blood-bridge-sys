import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  User, 
  MapPin, 
  Clock, 
  Heart, 
  Phone, 
  Settings, 
  Plus,
  AlertCircle,
  CheckCircle,
  Users
} from "lucide-react";
import { useState } from "react";

const PatientDashboard = () => {
  const [showRequestForm, setShowRequestForm] = useState(false);
  
  const patientInfo = {
    name: "Sarah Johnson",
    phone: "+1 (555) 987-6543",
    hospital: "City General Hospital"
  };

  const activeRequests = [
    {
      id: 1,
      bloodGroup: "O+",
      unitsNeeded: 2,
      urgency: "Critical",
      hospital: "City General Hospital",
      status: "Active",
      acceptedDonors: 3,
      createdAt: "2 hours ago"
    }
  ];

  const matchingDonors = [
    {
      id: 1,
      name: "John S.",
      bloodGroup: "O+",
      distance: "1.2 km",
      phone: "+1 (555) ***-4567",
      status: "Accepted",
      lastDonation: "45 days ago"
    },
    {
      id: 2,
      name: "Mike R.", 
      bloodGroup: "O+",
      distance: "2.1 km",
      phone: "+1 (555) ***-8901",
      status: "Accepted",
      lastDonation: "62 days ago"
    }
  ];

  const requestHistory = [
    { 
      date: "Oct 15, 2024", 
      bloodGroup: "O+", 
      units: 1, 
      status: "Completed",
      hospital: "Medical Center"
    },
    { 
      date: "Aug 22, 2024", 
      bloodGroup: "O+", 
      units: 2, 
      status: "Completed",
      hospital: "City General"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-primary text-primary-foreground";
      case "Completed": return "bg-success text-success-foreground";
      case "Accepted": return "bg-success text-success-foreground";
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
                <AvatarFallback className="bg-blood text-blood-foreground">
                  {patientInfo.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">Hi {patientInfo.name.split(' ')[0]}, need help? Let's find a donor! 🩸</h1>
                <p className="text-muted-foreground">Hospital: {patientInfo.hospital}</p>
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
            {/* Quick Request Button */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-blood" />
                  <span>Blood Request</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!showRequestForm ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">Need blood urgently? Create a request to find donors nearby.</p>
                    <Button 
                      className="bg-blood hover:bg-blood/90" 
                      size="lg"
                      onClick={() => setShowRequestForm(true)}
                    >
                      <Plus className="h-5 w-5 mr-2" />
                      Request Blood Now
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="bloodGroup">Blood Group</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select blood group" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="O+">O+</SelectItem>
                            <SelectItem value="O-">O-</SelectItem>
                            <SelectItem value="A+">A+</SelectItem>
                            <SelectItem value="A-">A-</SelectItem>
                            <SelectItem value="B+">B+</SelectItem>
                            <SelectItem value="B-">B-</SelectItem>
                            <SelectItem value="AB+">AB+</SelectItem>
                            <SelectItem value="AB-">AB-</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="units">Units Needed</Label>
                        <Input type="number" placeholder="1" min="1" max="10" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="urgency">Urgency Level</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="critical">Critical</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="hospital">Hospital</Label>
                        <Input placeholder="Hospital location" defaultValue={patientInfo.hospital} />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea placeholder="Any additional information for donors..." rows={3} />
                    </div>

                    <div className="flex space-x-3">
                      <Button className="bg-blood hover:bg-blood/90">
                        <AlertCircle className="h-4 w-4 mr-2" />
                        Submit Request
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setShowRequestForm(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Active Requests */}
            {activeRequests.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-emergency" />
                    <span>Active Requests</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {activeRequests.map((request) => (
                    <div key={request.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Blood Request #{request.id}</p>
                          <p className="text-sm text-muted-foreground">{request.hospital}</p>
                        </div>
                        <Badge className="bg-emergency text-emergency-foreground">
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
                          <span className="text-muted-foreground">Donors Found:</span>
                          <p className="font-medium">{request.acceptedDonors}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-muted-foreground flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {request.createdAt}
                        </p>
                        <Badge className={getStatusColor(request.status)}>
                          {request.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Matching Donors */}
            {matchingDonors.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-success" />
                    <span>Matching Donors</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {matchingDonors.map((donor) => (
                    <div key={donor.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {donor.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{donor.name}</p>
                            <p className="text-sm text-muted-foreground">{donor.bloodGroup} • {donor.distance}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(donor.status)}>
                          {donor.status}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Last donation: </span>
                          <span>{donor.lastDonation}</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Phone className="h-4 w-4 mr-1" />
                            {donor.phone}
                          </Button>
                          <Button size="sm" className="bg-success hover:bg-success/90">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Contact
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>{patientInfo.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{patientInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{patientInfo.hospital}</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Request Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emergency">{activeRequests.length}</div>
                  <div className="text-sm text-muted-foreground">Active Requests</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success">{matchingDonors.length}</div>
                  <div className="text-sm text-muted-foreground">Donors Found</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-medium">{requestHistory.length}</div>
                  <div className="text-sm text-muted-foreground">Previous Requests</div>
                </div>
              </CardContent>
            </Card>

            {/* Request History */}
            <Card>
              <CardHeader>
                <CardTitle>Request History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {requestHistory.map((request, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div>
                        <p className="font-medium">{request.date}</p>
                        <p className="text-muted-foreground">{request.bloodGroup} • {request.units} units</p>
                      </div>
                      <Badge className={getStatusColor(request.status)}>
                        {request.status}
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

export default PatientDashboard;