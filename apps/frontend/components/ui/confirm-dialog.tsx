'use client';

import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from './dialog';
import { Button } from './button';
import { useTranslations } from '@/lib/i18n';

export interface ConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  errorMessage?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  confirmDisabled?: boolean;
  variant?: 'danger' | 'warning' | 'success' | 'default';
  closeOnConfirm?: boolean;
  onConfirm: () => void;
  onCancel?: () => void;
  showCancelButton?: boolean;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  onOpenChange,
  title,
  description,
  errorMessage,
  confirmLabel,
  cancelLabel,
  confirmDisabled = false,
  variant = 'default',
  closeOnConfirm = true,
  onConfirm,
  onCancel,
  showCancelButton = true,
}) => {
  const { t } = useTranslations();
  const finalConfirmLabel = confirmLabel ?? t('common.confirm');
  const finalCancelLabel = cancelLabel ?? t('common.cancel');

  const handleConfirm = () => {
    if (confirmDisabled) return;
    onConfirm();
    if (closeOnConfirm) {
      onOpenChange(false);
    }
  };

  const handleCancel = () => {
    onCancel?.();
    onOpenChange(false);
  };

  const variantStyles = {
    danger: {
      icon: (
        <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
          <span className="text-destructive text-2xl font-bold">!</span>
        </div>
      ),
      buttonVariant: 'destructive' as const,
    },
    warning: {
      icon: (
        <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center">
          <span className="text-warning text-2xl font-bold">!</span>
        </div>
      ),
      buttonVariant: 'warning' as const,
    },
    success: {
      icon: (
        <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
          <span className="text-success text-2xl font-bold">&#10003;</span>
        </div>
      ),
      buttonVariant: 'success' as const,
    },
    default: {
      icon: (
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-primary text-2xl font-bold">?</span>
        </div>
      ),
      buttonVariant: 'default' as const,
    },
  };

  const { icon, buttonVariant } = variantStyles[variant];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] p-0 gap-0">
        <DialogHeader className="p-6 pb-4">
          <div className="flex items-start gap-4">
            {icon}
            <div className="flex-1">
              <DialogTitle className="font-display text-xl font-bold tracking-tight">
                {title}
              </DialogTitle>
              <DialogDescription className="font-sans text-sm text-muted-foreground mt-2">
                {description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        {errorMessage && (
          <div className="px-6 pb-4">
            <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-3 font-sans text-sm text-destructive">
              {errorMessage}
            </div>
          </div>
        )}
        <DialogFooter className="p-4 bg-muted/50 border-t border-border flex-row justify-end gap-3 rounded-b-xl">
          {showCancelButton && (
            <Button variant="outline" onClick={handleCancel}>
              {finalCancelLabel}
            </Button>
          )}
          <Button variant={buttonVariant} onClick={handleConfirm} disabled={confirmDisabled}>
            {finalConfirmLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
