"use client";

import { ArrowRight, Check, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function AccountDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <div className="dialog-badge"><Sparkles />NEXORA PRIVATE ACCESS</div>
        <DialogHeader>
          <DialogTitle>Welcome to Nexora</DialogTitle>
          <DialogDescription>This demo uses placeholder authentication. Connect your backend later to enable real account creation and portfolio data.</DialogDescription>
        </DialogHeader>
        <div className="dialog-benefits"><span><Check />Personal portfolio intelligence</span><span><Check />One clear investment view</span><span><Check />Secure account experience</span></div>
        <div className="dialog-actions"><Button className="button-primary full" onClick={() => onOpenChange(false)}>Join the early-access list <ArrowRight /></Button><Button variant="outline" onClick={() => onOpenChange(false)}>Continue exploring</Button></div>
      </DialogContent>
    </Dialog>
  );
}
