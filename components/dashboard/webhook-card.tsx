'use client'
import { WebhookType } from '@/types-and-schemas/webhook'
import { Copy, Trash2 } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'

export default function WebhookCard({webhookUrl, webhookSecret, events = []}: WebhookType) {
  
  const handleCopy = () => { 
    if (webhookSecret) {
        navigator.clipboard.writeText(webhookSecret)
        toast.success('Webhook secret copied to clipboard', {
            description: 'You can now use it to observer your requests',
            richColors: true,
        })
    } else {
        toast.error('Webhook secret not found', {
            description: 'Please try again later',
            richColors: true,
        })
    }
  }

  return (
     <Card className="w-full mt-5">
        <CardHeader className='gap-y-2'>
            <CardTitle>{webhookUrl}</CardTitle>
            <CardDescription>
                {'events observed:'}
            </CardDescription>
            <div className='flex flex-row gap-x-2 flex-wrap'> 
                {events.map((event) => (
                    <span key={event} className="text-sm text-green-900 bg-muted rounded-full px-3 py-1">
                        {event}
                    </span>
                ))}
            </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
        <Button onClick={ () => handleCopy()}>
            <Trash2 />
        Delete webhook</Button>
        <Button onClick={() => handleCopy()}  variant="outline" className="ml-2">
        <Copy />
            Copy secret
        </Button>
        </CardFooter>
    </Card> 
  )
}
