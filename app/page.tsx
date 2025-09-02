'use client';


import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world"
import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form"
import PokemonPage from "@/registry/new-york/blocks/complex-component/page"
import { ExampleCard } from "@/registry/new-york/blocks/example-with-css/example-card"
import { componentData } from "@/component-data/component-data"
import { Badge } from "@/registry/new-york/ui/badge"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/registry/new-york/ui/tooltip"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/new-york/ui/card"
import { Button } from "@/registry/new-york/ui/button"
import { Copy, CopyCheck, ExternalLink } from "lucide-react"

export default function Home() {

  return (
    <div className="px-20 mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distributing code using shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <ComponentList />
      </main>
    </div>
  )
}

function ComponentList() {

  const getFullUrl = (str: string) => {
    return `https://alljkomal-registry.vercel.app/r/${str}.json`;
  }
  const [copiedPath, setCopiedPath] = React.useState<string | null>(null);

  const handleCopy = (url: string) => {
    const fullText = `pnpm dlx shadcn@latest add ${url}`;
    navigator.clipboard.writeText(fullText);
    setCopiedPath(url);
    setTimeout(() => setCopiedPath(null), 1500);
  };

  return (
    <TooltipProvider>
      <div className="grid grid-cols-2 gap-6">
        {componentData.map((cmp) => {
          const fullUrl = getFullUrl(cmp.path);

          return (
            <Card key={cmp.path} className=" py-0 gap-0">
              <CardHeader className="flex flex-row py-4 px-4 justify-between items-start space-y-0">
                <div>
                  <CardTitle className="text-xl">{cmp.name}</CardTitle>
                  <CardDescription className="text-sm">{cmp.description}</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="capitalize">
                    {cmp.type}
                  </Badge>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => handleCopy(fullUrl)}
                      >
                        {!!copiedPath ? <CopyCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      {copiedPath === fullUrl ? "Copied!" : "Copy URL"}
                    </TooltipContent>
                  </Tooltip>
                  <Link
                    href={fullUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4"/>
                  </Link>
                </div>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </TooltipProvider>
  );
}
