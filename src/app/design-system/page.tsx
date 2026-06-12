import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { CTASection } from "@/components/ui/cta-section";
import { CheckCircle2, AlertCircle, Info, FileText, Lock, Shield, Zap } from "lucide-react";

export default function DesignSystemPage() {
    if (process.env.NODE_ENV === "production") {
        notFound();
    }

    return (
        <div className="min-h-screen bg-neutral-50 font-sans">
            <Navbar />


            <main className="container py-12 space-y-16">

                {/* Typography Section */}
                <section className="space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold">Typography</h2>
                        <Separator />
                    </div>
                    <div className="grid gap-4">
                        <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Display (3rem/48px)</p>
                            <h1 className="text-display min-h-[48px]">The quick brown fox</h1>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">H1 (2.25rem/36px)</p>
                            <h1 className="text-4xl font-bold">The quick brown fox</h1>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">H2 (1.875rem/30px)</p>
                            <h2 className="text-3xl font-semibold">The quick brown fox</h2>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">H3 (1.5rem/24px)</p>
                            <h3 className="text-2xl font-semibold">The quick brown fox</h3>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Body Large</p>
                            <p className="text-lg">The quick brown fox jumps over the lazy dog.</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Body Regular</p>
                            <p className="text-base">The quick brown fox jumps over the lazy dog.</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Small</p>
                            <p className="text-sm text-muted-foreground">The quick brown fox jumps over the lazy dog.</p>
                        </div>
                    </div>
                </section>

                {/* Colors Section */}
                <section className="space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold">Colors & Brand</h2>
                        <Separator />
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
                        <div className="bg-brand-400 p-8 rounded-lg shadow-sm flex items-center justify-center font-bold">Brand 400</div>
                        <div className="bg-brand-500 p-8 rounded-lg shadow-sm flex items-center justify-center font-bold">Brand 500</div>
                        <div className="bg-brand-100 p-8 rounded-lg shadow-sm flex items-center justify-center font-bold text-black border">Brand 100</div>
                        <div className="bg-neutral-900 p-8 rounded-lg shadow-sm flex items-center justify-center font-bold text-white">Neutral 900</div>
                        <div className="bg-neutral-100 p-8 rounded-lg shadow-sm flex items-center justify-center font-bold text-black border">Neutral 100</div>
                        <div className="bg-semantic-success p-8 rounded-lg shadow-sm flex items-center justify-center font-bold text-white">Success</div>
                        <div className="bg-semantic-error p-8 rounded-lg shadow-sm flex items-center justify-center font-bold text-white">Error</div>
                        <div className="bg-semantic-warning p-8 rounded-lg shadow-sm flex items-center justify-center font-bold text-white">Warning</div>
                        <div className="bg-semantic-info p-8 rounded-lg shadow-sm flex items-center justify-center font-bold text-white">Info</div>
                    </div>
                </section>

                {/* Components Section */}
                <section className="space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold">Components</h2>
                        <Separator />
                    </div>

                    {/* Buttons */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Buttons</h3>
                        <div className="flex flex-wrap gap-4">
                            <Button>Primary Action</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="destructive">Destructive</Button>
                            <Button size="lg">Large Button</Button>
                            <Button size="sm">Small</Button>
                        </div>
                    </div>

                    {/* Badges */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Badges</h3>
                        <div className="flex flex-wrap gap-4">
                            <Badge>Default</Badge>
                            <Badge variant="secondary">Secondary</Badge>
                            <Badge variant="outline">Outline</Badge>
                            <Badge variant="success">Success</Badge>
                            <Badge variant="warning">Warning</Badge>
                            <Badge variant="destructive">Error</Badge>
                            <Badge variant="info">Info</Badge>
                        </div>
                    </div>

                    {/* Inputs */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Inputs</h3>
                        <div className="grid max-w-sm gap-4">
                            <Input placeholder="Default Input" />
                            <Input placeholder="Invalid Input" className="border-red-500 focus-visible:ring-red-500" />
                        </div>
                    </div>

                    {/* Dialog & Tooltip */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Dialog & Tooltip</h3>
                        <div className="flex gap-4">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline">Open Dialog</Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                                        <DialogDescription>
                                            This action cannot be undone. This will permanently delete your account
                                            and remove your data from our servers.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter>
                                        <Button type="submit">Confirm</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" size="icon">
                                            <Info className="h-4 w-4" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>This is a tooltip helper text</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Tabs</h3>
                        <Tabs defaultValue="account" className="w-[400px]">
                            <TabsList>
                                <TabsTrigger value="account">Account</TabsTrigger>
                                <TabsTrigger value="password">Password</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account">Make changes to your account here.</TabsContent>
                            <TabsContent value="password">Change your password here.</TabsContent>
                        </Tabs>
                    </div>

                    {/* Accordion */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Accordion</h3>
                        <Accordion type="single" collapsible className="w-full max-w-md">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Is it styled?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It comes with default styles that matches the other components&apos; aesthetic.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    {/* Alerts */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Alerts</h3>
                        <div className="grid gap-4 max-w-2xl">
                            <Alert>
                                <Zap className="h-4 w-4" />
                                <AlertTitle>Heads up!</AlertTitle>
                                <AlertDescription>
                                    You can add components to your app using the cli.
                                </AlertDescription>
                            </Alert>
                            <Alert variant="destructive">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>
                                    Your session has expired. Please log in again.
                                </AlertDescription>
                            </Alert>
                            <Alert variant="warning">
                                <Lock className="h-4 w-4" />
                                <AlertTitle>Warning</AlertTitle>
                                <AlertDescription>
                                    Your subscription is expiring soon.
                                </AlertDescription>
                            </Alert>
                            <Alert variant="success">
                                <CheckCircle2 className="h-4 w-4" />
                                <AlertTitle>Success</AlertTitle>
                                <AlertDescription>
                                    Your changes have been saved successfully.
                                </AlertDescription>
                            </Alert>
                        </div>
                    </div>
                </section>

                {/* Layouts Section */}
                <section className="space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold">Bento Layouts & Cards</h2>
                        <Separator />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card variant="feature" className="p-0">
                            <CardHeader>
                                <div className="h-12 w-12 rounded-lg bg-brand-100 flex items-center justify-center mb-4 text-brand-500">
                                    <Shield className="h-6 w-6" />
                                </div>
                                <CardTitle>DPO as a Service</CardTitle>
                                <CardDescription>
                                    Contrate um DPO certificado sem os custos de CLT. Atenda as exigências da LGPD com economia de até 70%.
                                </CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Button variant="link" className="p-0 text-brand-500 font-bold hover:text-brand-600">Saiba mais →</Button>
                            </CardFooter>
                        </Card>

                        <Card className="hover:border-brand-300 transition-colors p-0">
                            <CardHeader>
                                <div className="h-12 w-12 rounded-lg bg-neutral-100 flex items-center justify-center mb-4 text-neutral-500">
                                    <Zap className="h-6 w-6" />
                                </div>
                                <CardTitle>Adequação Acelerada</CardTitle>
                                <CardDescription>
                                    Diagnóstico rápido e plano de ação em 4 etapas. Implementação técnica e jurídica sem burocracia desnecessária.
                                </CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Button variant="link" className="p-0 text-neutral-500 font-bold hover:text-neutral-900">Saiba mais →</Button>
                            </CardFooter>
                        </Card>

                        <Card className="hover:border-brand-300 transition-colors p-0">
                            <CardHeader>
                                <div className="h-12 w-12 rounded-lg bg-neutral-100 flex items-center justify-center mb-4 text-neutral-500">
                                    <FileText className="h-6 w-6" />
                                </div>
                                <CardTitle>Software de Gestão</CardTitle>
                                <CardDescription>
                                    Substitua planilhas por uma plataforma completa de privacidade. Cookies, DSR e Mapeamento de Dados integrados.
                                </CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Button variant="link" className="p-0 text-neutral-500 font-bold hover:text-neutral-900">Saiba mais →</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </section>

                <CTASection />

            </main>

            <Footer />
        </div>
    );
}
