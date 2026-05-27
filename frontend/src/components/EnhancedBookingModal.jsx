import { useState } from 'react';
import { X, Calendar as CalendarIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { useToast } from '../hooks/use-toast';
import { format } from 'date-fns';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const locations = [
  'Mumbai Airport',
  'Delhi Airport',
  'Goa Airport',
  'Ahmedabad Airport',
  'Bangalore Airport',
  'Hyderabad Airport',
  'Chennai Airport',
  'Kolkata Airport',
  'Pune Airport',
  'Jaipur Airport',
  'Other'
];

const countryCodes = [
  { code: '+91', country: 'India' },
  { code: '+1', country: 'USA' },
  { code: '+44', country: 'UK' },
  { code: '+1', country: 'Canada' },
  { code: '+61', country: 'Australia' },
  { code: '+64', country: 'New Zealand' }
];

const deliveryTypes = ['Bag', 'Box'];

const EnhancedBookingModal = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    pickupLocation: '',
    pickupAddress: '',
    dropOffLocation: '',
    dropOffAddress: '',
    preferredPickupDate: null,
    deliveryType: '',
    numberOfBags: '',
    fullName: '',
    email: '',
    countryCode: '+91',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.pickupLocation) newErrors.pickupLocation = 'Please select pickup location.';
    if (!formData.pickupAddress.trim()) newErrors.pickupAddress = 'Please enter pickup address.';
    if (!formData.dropOffLocation) newErrors.dropOffLocation = 'Please select drop off location.';
    if (!formData.dropOffAddress.trim()) newErrors.dropOffAddress = 'Please enter drop off address.';
    if (!formData.preferredPickupDate) newErrors.preferredPickupDate = 'Please select pickup date.';
    if (!formData.deliveryType) newErrors.deliveryType = 'Please select delivery type.';
    if (!formData.numberOfBags || formData.numberOfBags < 1) newErrors.numberOfBags = 'Please enter number of bags/boxes.';
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter a valid email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter a valid phone number.';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Send booking data to backend
      await axios.post(`${API}/booking`, {
        pickupLocation: formData.pickupLocation,
        pickupAddress: formData.pickupAddress,
        dropOffLocation: formData.dropOffLocation,
        dropOffAddress: formData.dropOffAddress,
        preferredPickupDate: formData.preferredPickupDate.toISOString(),
        deliveryType: formData.deliveryType,
        numberOfBags: parseInt(formData.numberOfBags),
        fullName: formData.fullName,
        email: formData.email,
        phone: `${formData.countryCode}${formData.phone}`
      });

      toast({
        title: "Thank You!",
        description: "Your booking request has been received. We will contact you shortly at " + formData.email,
      });
      
      // Reset form
      setFormData({
        pickupLocation: '',
        pickupAddress: '',
        dropOffLocation: '',
        dropOffAddress: '',
        preferredPickupDate: null,
        deliveryType: '',
        numberOfBags: '',
        fullName: '',
        email: '',
        countryCode: '+91',
        phone: ''
      });
      setErrors({});
      onClose();
    } catch (error) {
      console.error('Booking submission error:', error);
      toast({
        title: "Error",
        description: "Failed to submit booking. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-8">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900">Book Your Baggage Delivery</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Pickup Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Pickup Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="pickupLocation" className="text-gray-700 font-medium mb-2 block">
                  Pickup Location <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.pickupLocation} onValueChange={(value) => handleChange('pickupLocation', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select pickup location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.pickupLocation && (
                  <p className="text-red-500 text-sm mt-1">{errors.pickupLocation}</p>
                )}
              </div>

              <div>
                <Label htmlFor="pickupAddress" className="text-gray-700 font-medium mb-2 block">
                  Pickup Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="pickupAddress"
                  type="text"
                  value={formData.pickupAddress}
                  onChange={(e) => handleChange('pickupAddress', e.target.value)}
                  placeholder="Enter full pickup address"
                />
                {errors.pickupAddress && (
                  <p className="text-red-500 text-sm mt-1">{errors.pickupAddress}</p>
                )}
              </div>
            </div>
          </div>

          {/* Drop Off Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Drop Off Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="dropOffLocation" className="text-gray-700 font-medium mb-2 block">
                  Drop Off Location <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.dropOffLocation} onValueChange={(value) => handleChange('dropOffLocation', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select drop off location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.dropOffLocation && (
                  <p className="text-red-500 text-sm mt-1">{errors.dropOffLocation}</p>
                )}
              </div>

              <div>
                <Label htmlFor="dropOffAddress" className="text-gray-700 font-medium mb-2 block">
                  Drop Off Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="dropOffAddress"
                  type="text"
                  value={formData.dropOffAddress}
                  onChange={(e) => handleChange('dropOffAddress', e.target.value)}
                  placeholder="Enter full drop off address"
                />
                {errors.dropOffAddress && (
                  <p className="text-red-500 text-sm mt-1">{errors.dropOffAddress}</p>
                )}
              </div>
            </div>
          </div>

          {/* Delivery Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Delivery Details</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label className="text-gray-700 font-medium mb-2 block">
                  Preferred Pickup Date <span className="text-red-500">*</span>
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.preferredPickupDate ? format(formData.preferredPickupDate, 'PPP') : 'Pick a date'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.preferredPickupDate}
                      onSelect={(date) => handleChange('preferredPickupDate', date)}
                      disabled={(date) => date < new Date(new Date().toDateString())}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {errors.preferredPickupDate && (
                  <p className="text-red-500 text-sm mt-1">{errors.preferredPickupDate}</p>
                )}
              </div>

              <div>
                <Label htmlFor="deliveryType" className="text-gray-700 font-medium mb-2 block">
                  Delivery Type <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.deliveryType} onValueChange={(value) => handleChange('deliveryType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {deliveryTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.deliveryType && (
                  <p className="text-red-500 text-sm mt-1">{errors.deliveryType}</p>
                )}
              </div>

              <div>
                <Label htmlFor="numberOfBags" className="text-gray-700 font-medium mb-2 block">
                  Number of Bags/Boxes <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="numberOfBags"
                  type="number"
                  min="1"
                  value={formData.numberOfBags}
                  onChange={(e) => handleChange('numberOfBags', e.target.value)}
                  placeholder="Enter quantity"
                />
                {errors.numberOfBags && (
                  <p className="text-red-500 text-sm mt-1">{errors.numberOfBags}</p>
                )}
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName" className="text-gray-700 font-medium mb-2 block">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <div className="flex gap-2">
                  <Select value={formData.countryCode} onValueChange={(value) => handleChange('countryCode', value)}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {countryCodes.map((item) => (
                        <SelectItem key={`${item.code}-${item.country}`} value={item.code}>
                          {item.code} ({item.country})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    id="phone"
                    type="tel"
                    className="flex-1"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 font-semibold text-lg transition-all duration-300 hover:shadow-lg"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EnhancedBookingModal;
