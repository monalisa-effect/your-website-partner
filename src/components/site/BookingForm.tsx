import { useState } from "react";
import { CalendarCheck, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { whatsappLink } from "./contact";

const SERVICES = [
  "Generator Sales",
  "Installation",
  "Preventive Maintenance",
  "Repairs / Diagnosis",
  "Spare Parts Supply",
  "Heavy Equipment Service",
];

export function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    location: "",
    details: "",
  });

  const set = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service || !form.date) {
      toast.error("Please fill in your name, phone, service and preferred date.");
      return;
    }
    const message = [
      "New service booking request",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Preferred date: ${form.date}${form.time ? ` at ${form.time}` : ""}`,
      form.location ? `Location: ${form.location}` : "",
      form.details ? `Details: ${form.details}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    toast.success("Booking sent — our team will confirm on WhatsApp shortly.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
    >
      <div className="mb-6 flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-md bg-secondary/10 text-secondary">
          <CalendarCheck className="size-5" />
        </span>
        <div>
          <h3 className="text-lg text-foreground">Book a service visit</h3>
          <p className="text-sm text-muted-foreground">
            Pick a date — we confirm within working hours.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name *</Label>
          <Input
            id="name"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="e.g. Emeka Nwosu"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone number *</Label>
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="080..."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Service needed *</Label>
          <Select value={form.service} onValueChange={(v) => set("service", v)}>
            <SelectTrigger id="service">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {SERVICES.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Site location</Label>
          <Input
            id="location"
            value={form.location}
            onChange={(e) => set("location", e.target.value)}
            placeholder="Area / State"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Preferred date *</Label>
          <Input
            id="date"
            type="date"
            value={form.date}
            onChange={(e) => set("date", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="time">Preferred time</Label>
          <Input
            id="time"
            type="time"
            value={form.time}
            onChange={(e) => set("time", e.target.value)}
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="details">Generator brand / issue</Label>
          <Textarea
            id="details"
            rows={3}
            value={form.details}
            onChange={(e) => set("details", e.target.value)}
            placeholder="e.g. 60KVA Perkins, not starting after last service"
          />
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full gap-2">
        <Send className="size-4" />
        Send booking request
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Your request opens in WhatsApp so our technicians can confirm instantly.
      </p>
    </form>
  );
}
