import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getApiUrl } from "@/utils/api";

interface WaitlistDialogProps {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const WaitlistDialog = ({ trigger, open, onOpenChange }: WaitlistDialogProps) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [sport, setSport] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    
    try {
      const response = await fetch(`${getApiUrl()}/api/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, role, sport }),
      });

      if (!response.ok) {
        throw new Error('Failed to join waitlist');
      }

      toast({
        title: "Success!",
        description: "Thanks for joining our waiting list!",
      });
      
      // Reset form fields
      setEmail("");
      setRole("");
      setSport("");
      setLoading(false);
      
      // Close dialog if controlled
      if (onOpenChange) {
        onOpenChange(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
      toast({
        title: "Error",
        description: "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Join our waitlist</DialogTitle>
          <DialogDescription>
            Be the first to experience Spopeer when we launch
          </DialogDescription>
        </DialogHeader>
        
        <div className="p-1">
          <h3 className="text-lg font-semibold mb-3">I am</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Choose your role</label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Athlete">Athlete</SelectItem>
                  <SelectItem value="Coach">Coach</SelectItem>
                  <SelectItem value="Club">Club</SelectItem>
                  <SelectItem value="Supportive Professional">Supportive Professional</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Your sport</label>
              {/* <Select value={sport} onValueChange={setSport}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select sport" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="football">Football</SelectItem>
                  <SelectItem value="basketball">Basketball</SelectItem>
                  <SelectItem value="tennis">Tennis</SelectItem>
                  <SelectItem value="running">Running</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select> */}

              <Input 
                type="text" 
                value={sport}
                onChange={(e) => setSport(e.target.value)}
                placeholder="Basketball, Football, Tennis, etc."
                required
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Enter your email</label>
              <Input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                className="w-full"
              />
            </div>
            
            <Button type="submit" className="cta-button w-full" disabled={loading}>
              {loading ? "Submitting..." : "Join our waiting list"}
              {!loading && <ChevronRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>
          
          <p className="text-xs text-gray-800 mt-3 font-normal">
            *<span className="font-bold">Supportive Profession</span> includes all sports enthusiasts who are not athletes, coaches, or clubs (e.g. physios, scouts, journalists, photographers, and more) who want to contribute to the sports community in a meaningful capacity.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;
