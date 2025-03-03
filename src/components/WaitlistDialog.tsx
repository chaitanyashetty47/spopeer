
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

interface WaitlistDialogProps {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const WaitlistDialog = ({ trigger, open, onOpenChange }: WaitlistDialogProps) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [sport, setSport] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, role, sport });
    // Here you would typically send this data to your backend
    toast({
      title: "Success!",
      description: "Thanks for joining our waiting list!",
    });
    
    // Reset form fields
    setEmail("");
    setRole("");
    setSport("");
    
    // Close dialog if controlled
    if (onOpenChange) {
      onOpenChange(false);
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
                  <SelectItem value="athlete">Athlete</SelectItem>
                  <SelectItem value="coach">Coach</SelectItem>
                  <SelectItem value="club">Club</SelectItem>
                  <SelectItem value="professional">Supportive Professional</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Your sport</label>
              <Select value={sport} onValueChange={setSport}>
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
              </Select>
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
            
            <Button type="submit" className="cta-button w-full">
              Join our waiting list
              <ChevronRight className="ml-2 h-4 w-4" />
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
