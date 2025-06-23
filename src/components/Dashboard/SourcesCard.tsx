import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface SourceData {
    name: string;
    value: number;
    amount: number;
    color: string;
}

const sourcesData: SourceData[] = [
    { name: 'Clutch', value: 50, amount: 3000, color: '#F87171' }, // red-400
    { name: 'Behance', value: 40, amount: 1000, color: '#FBBF24' }, // amber-400
    { name: 'Instagram', value: 10, amount: 1000, color: '#2DD4BF' }, // teal-400
    { name: 'Dribbble', value: 10, amount: 1000, color: '#4ADE80' }, // green-400
];

const SourcesCard: React.FC = () => {
    const [activeToggle, setActiveToggle] = React.useState('converted');

    return (
        <Card>
            <CardHeader>
                <CardTitle>Sources</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
                <div className="w-48 h-48 mb-6">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={sourcesData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                dataKey="value"
                                paddingAngle={5}
                            >
                                {sourcesData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <ToggleGroup type="single" value={activeToggle} onValueChange={(value) => value && setActiveToggle(value)} className="mb-6">
                    <ToggleGroupItem value="came" aria-label="Leads came">Leads came</ToggleGroupItem>
                    <ToggleGroupItem value="converted" aria-label="Leads Converted">Leads Converted</ToggleGroupItem>
                    <ToggleGroupItem value="size" aria-label="Total deals size">Total deals size</ToggleGroupItem>
                </ToggleGroup>
                <ul className="w-full space-y-3">
                    {sourcesData.map((source, index) => (
                        <li key={source.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 text-sm">
                             <div className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: source.color }} />
                                <span className="text-muted-foreground">{source.name}</span>
                            </div>
                            <span className="font-medium text-right">$ {source.amount.toLocaleString()}</span>
                            { source.name === 'Dribbble' ? (
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <span className="text-muted-foreground text-right w-12 cursor-pointer">{source.value}%</span>
                                        </TooltipTrigger>
                                        <TooltipContent side="bottom" align="end">
                                            <p>from leads total</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            ) : (
                                <span className="text-muted-foreground text-right w-12">{source.value}%</span>
                            )}
                        </li>
                    ))}
                </ul>
            </CardContent>
             <CardFooter className="justify-end">
                <Button variant="secondary" size="sm">from leads total</Button>
             </CardFooter>
        </Card>
    );
};

export default SourcesCard;
